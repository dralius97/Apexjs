export type Either<T> = Right<T> | Left;
export declare class Left extends Error {
    code: number;
    constructor(message: string, code: number);
    isRight: boolean;
    isLeft: boolean;
}
export declare class Right<T> {
    data: T;
    message?: string | undefined;
    code: number;
    constructor(data: T, message?: string | undefined, code?: number);
    isRight: boolean;
    isLeft: boolean;
}
export declare class HttpResultSuccess<T> extends Right<T> {
    constructor(data: T, message: string);
}
export declare class HttpResultCreated<T> extends Right<T> {
    constructor(data: T, message: string);
}
export declare class ResponseFromMethod<T> extends Right<T> {
    constructor(data: T);
}
//# sourceMappingURL=railway.d.ts.map