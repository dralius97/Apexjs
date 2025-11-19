import { Request, Response } from "express-serve-static-core";
import { HttpHandler } from "../../../../domain/http/http.js";
export declare class ExpressAdapter {
    private middleware;
    private httpResponseFormatter;
    call: (mdworFn: string | symbol | HttpHandler, maybeFn?: HttpHandler) => (req: Request, res: Response) => Promise<void>;
    private ctx;
    private warp;
}
//# sourceMappingURL=index.d.ts.map