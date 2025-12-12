import { Either, Left } from "../../domain/signal/railway.ts"


export const ValidateMethod = <A extends unknown[], R> (fn: (...args:A)=> Promise<Either<boolean>>) => {
    return (
        value: (...args: A) => Promise<Either<R>>, 
        _context: ClassMethodDecoratorContext
    ) =>  async (...args:A): Promise<Either<R>> => {
        const validate = await fn(...args);
        if (validate instanceof Left) return validate;
        return await value.apply(this, args);
    };
};


export const ValidateField = <A extends unknown[], R> (fn: (...args:A)=> Promise<Either<boolean>>) => {
    return (
        _value: undefined, 
        _context: ClassFieldDecoratorContext
    ) =>  {
        return function(originalFn: (...args: A) => Promise<Either<R>>) {
            return async function(...args: A): Promise<Either<R>> {
                const validate = await fn(...args);
                if (validate instanceof Left) return validate;
                return await originalFn(...args);
            };
        };
    }
};
