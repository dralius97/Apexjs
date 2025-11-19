var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { Left } from "../../../../domain/signal/railway.js";
import { Inject } from "../../../../core/DI/decorator.js";
import { TYPE } from "../../../../domain/DI/type.js";
import { TYPEMDW } from "../../../../domain/middlware/type.js";
let ExpressAdapter = (() => {
    let _middleware_decorators;
    let _middleware_initializers = [];
    let _middleware_extraInitializers = [];
    let _httpResponseFormatter_decorators;
    let _httpResponseFormatter_initializers = [];
    let _httpResponseFormatter_extraInitializers = [];
    return class ExpressAdapter {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _middleware_decorators = [Inject(TYPE.Middleware)];
            _httpResponseFormatter_decorators = [Inject(TYPE.HttpResponseFormatter)];
            __esDecorate(null, null, _middleware_decorators, { kind: "field", name: "middleware", static: false, private: false, access: { has: obj => "middleware" in obj, get: obj => obj.middleware, set: (obj, value) => { obj.middleware = value; } }, metadata: _metadata }, _middleware_initializers, _middleware_extraInitializers);
            __esDecorate(null, null, _httpResponseFormatter_decorators, { kind: "field", name: "httpResponseFormatter", static: false, private: false, access: { has: obj => "httpResponseFormatter" in obj, get: obj => obj.httpResponseFormatter, set: (obj, value) => { obj.httpResponseFormatter = value; } }, metadata: _metadata }, _httpResponseFormatter_initializers, _httpResponseFormatter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        middleware = __runInitializers(this, _middleware_initializers, void 0);
        httpResponseFormatter = (__runInitializers(this, _middleware_extraInitializers), __runInitializers(this, _httpResponseFormatter_initializers, void 0));
        call = (__runInitializers(this, _httpResponseFormatter_extraInitializers), (mdworFn, maybeFn) => async (req, res) => {
            const [httpRequest, httpResponse] = this.ctx(req, res);
            try {
                const hasMiddleware = typeof mdworFn !== 'function';
                const mdw = hasMiddleware ? mdworFn : TYPEMDW.NO_MIDDLEWARE;
                const fn = hasMiddleware ? maybeFn : mdworFn;
                const result = await this.warp(mdw, fn)(httpRequest, httpResponse);
                if (result instanceof Left)
                    return this.httpResponseFormatter.sendError(result, httpResponse);
                return this.httpResponseFormatter.sendResponse(result, httpResponse);
            }
            catch (error) {
                return this.httpResponseFormatter.sendError(error, httpResponse);
            }
        });
        ctx(req, res) {
            const httpResponse = {
                json(data) {
                    return res.json(data);
                },
                send(data) {
                    return res.send(data);
                },
                setHeader(name, value) {
                    return res.setHeader(name, value);
                },
                status(code) {
                    res.status(code);
                    return this;
                },
                setLocals(key, value) {
                    res.locals[key] = value;
                },
                getLocals(key) {
                    return res.locals[key];
                },
            };
            const httpRequest = {
                headers: req.headers,
                method: req.method,
                path: req.path,
                body: req.body,
                params: req.params,
                query: req.query,
            };
            return [httpRequest, httpResponse];
        }
        warp = (mdw, fn) => async (req, res) => {
            const result = await this.middleware.execute(mdw)(req, res);
            if (result instanceof Left)
                return result;
            return await fn(req, res);
        };
    };
})();
export { ExpressAdapter };
//# sourceMappingURL=index.js.map