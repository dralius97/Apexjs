import { Left } from "../../domain/signal/railway.js";
export class HttpResponseFormatter {
    sendError(error, res) {
        if (error instanceof Left) {
            return res.status(error.code).json({
                message: error.message,
            });
        }
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message || 'Internal Server Error!'
            });
        }
    }
    sendResponse(response, res) {
        return res.status(response.code).json({
            message: response.message,
            data: response.data
        });
    }
}
//# sourceMappingURL=index.js.map