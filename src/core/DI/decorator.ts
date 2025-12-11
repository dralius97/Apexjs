import { Container } from "./container.ts";
import { Identifier } from "./type.ts";

export const Inject = (token: Identifier) => {
    return (
        _value: undefined, 
        context: ClassFieldDecoratorContext
    ) => {
        return context.addInitializer(function () {
            const c = Container.get();
            (this as Record<string, unknown>)[context.name as string] = c.get(token);
        });
    };
};