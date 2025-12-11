import { Either, Left } from "../../domain/signal/railway.ts"


export const Middleware = <A extends unknown[], R> (fn: (...args:A)=> Promise<Either<R>>) => {
    return (
        value: (...args: A) => Promise<Either<R>>, 
        _context: ClassMethodDecoratorContext
    ) =>  async (...args:A): Promise<Either<R>> => {
        const validate = await fn(...args);
        if (validate instanceof Left) return validate;
        return await value.apply(this, args);
    };
};


export const Validator = <A extends unknown[], R> (fn: (...args:A)=> Promise<Either<R>>) => {
    return (
        value: (...args: A) => Promise<Either<R>>, 
        _context: ClassMethodDecoratorContext
    ) =>  {
        return async (...args:A): Promise<Either<R>> => {
            const validate = await fn(...args);
            if (validate instanceof Left) return validate;
            return await value.apply(this, args);
        };
    }
};

