import { Container } from "../../core/DI/container.js";
import { Middleware } from "../../core/middleware/middleware.js";
import { HttpResponseFormatter } from "../HttpResponseFormatter/index.js";
import { TYPE } from "../../domain/DI/type.js";
export const binding = () => {
    const container = Container.get();
    container.bind(TYPE.Middleware, {
        instance: Middleware,
        singleton: true
    });
    container.bind(TYPE.HttpResponseFormatter, {
        instance: HttpResponseFormatter,
        singleton: true
    });
};
//# sourceMappingURL=factoryDI.js.map