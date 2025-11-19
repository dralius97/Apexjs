import { HttpResponse } from "../../domain/http/http.js";
import { Right } from "../../domain/signal/railway.js";
export declare class HttpResponseFormatter {
    sendError(error: unknown, res: HttpResponse): void;
    sendResponse<T>(response: Right<T>, res: HttpResponse): void;
}
//# sourceMappingURL=index.d.ts.map