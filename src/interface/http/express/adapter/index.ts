import { Request, Response } from "express-serve-static-core";
import { HttpHandler, HttpRequest, HttpResponse } from "../../../../domain/http/http";
import { Middleware } from "../../../../core/middleware/middleware";
import { HttpResponseFormatter } from "../../../../infrastructure/HttpResponseFormatter/index";
import { Left } from "../../../../domain/signal/railway";
import { Inject } from "../../../../core/DI/decorator";
import { TYPE } from "../../../../domain/DI/type";
import { TYPEMDW } from "../../../../domain/middlware/type";

export class ExpressAdapter {
    @Inject(TYPE.Middleware) private middleware!: Middleware
    @Inject(TYPE.HttpResponseFormatter) private httpResponseFormatter!: HttpResponseFormatter

    public call = (mdworFn: string | symbol | HttpHandler, maybeFn?: HttpHandler) => async ( req: Request, res: Response )  => {
        const [httpRequest, httpResponse] = this.ctx( req, res )
        try {
            const hasMiddleware = typeof mdworFn !== 'function'
            const mdw = hasMiddleware ? mdworFn as string | symbol : TYPEMDW.NO_MIDDLEWARE
            const fn  = hasMiddleware ? maybeFn! : mdworFn
            const result = await this.warp( mdw, fn! )( httpRequest,httpResponse )
            if(result instanceof Left) return this.httpResponseFormatter.sendError( result, httpResponse );
            return this.httpResponseFormatter.sendResponse( result, httpResponse )
        } catch ( error ) {
            return this.httpResponseFormatter.sendError( error, httpResponse );
        }
    }
    private ctx( req: Request, res: Response ): [HttpRequest, HttpResponse] {
        const httpResponse: HttpResponse = {
            json( data ) {
                return res.json( data )
            },
            send( data ) {
                return res.send( data )
            },
            setHeader( key, value ) {
                return res.setHeader( key, value )
            },
            status( code ) {
                res.status( code )
                return this
            },
            setLocals( key, value ) {
                res.locals[ key ] = value
            },
            getLocals( key ) {
                return res.locals[ key ]
            },
        }
        const httpRequest: HttpRequest = {
            headers: req.headers as Record<string, string> | string[],
            method: req.method,
            path: req.path,
            body: req.body,
            params: req.params,
            query: req.query as Record<string, string>,
        }
        return [httpRequest, httpResponse] 
    }   
    private warp = ( mdw:string | symbol, fn:HttpHandler ) => async ( req: HttpRequest, res: HttpResponse ) => {
        const result = await this.middleware.execute( mdw )( req )
        if(result instanceof Left) return result
        return await fn( req, res )
    }
}