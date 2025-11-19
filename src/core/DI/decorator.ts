import { Container } from "./container.js";
import { Identifier } from "./type.js";

export const Inject = (token: Identifier) => {
    return (
        _value: undefined, 
        context: ClassFieldDecoratorContext
    ) => {
        context.addInitializer(function () {
            const c = Container.get();
            (this as Record<string, unknown>)[String(token)] = c.get(token);
        });
    };
};