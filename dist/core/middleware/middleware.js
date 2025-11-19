import { Left, Right } from "../../domain/signal/railway.js";
export class Middleware {
    middleware;
    constructor() {
        this.middleware = new Map();
    }
    add(key, fnChain) {
        this.middleware.set(key, fnChain);
    }
    execute = (key) => async (req, res) => {
        if (!this.middleware.has(key))
            return;
        const md = this.middleware.get(key);
        let result = new Right('mdw pass');
        for (const fn of md) {
            result = await fn(req, res);
            if (result instanceof Left) {
                break;
            }
        }
        return result;
    };
}
//# sourceMappingURL=middleware.js.map