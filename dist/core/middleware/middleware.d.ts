import { HttpHandler, HttpRequest, HttpResponse } from "../../domain/http/http.js";
import { Left, Right } from "../../domain/signal/railway.js";
export declare class Middleware {
    private middleware;
    constructor();
    add(key: string | symbol, fnChain: HttpHandler[]): void;
    execute: (key: string | symbol) => (req: HttpRequest, res: HttpResponse) => Promise<Right<unknown> | Left | void>;
}
//# sourceMappingURL=middleware.d.ts.map