import { Container } from "./container.js";
export const Inject = (token) => {
    return (_value, context) => {
        context.addInitializer(function () {
            const c = Container.get();
            this[String(token)] = c.get(token);
        });
    };
};
//# sourceMappingURL=decorator.js.map