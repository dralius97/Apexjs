export type Either<T> = Right<T> | Left

export class Left extends Error{
    constructor(message:string, public code: number){
        super(message)
        this.code = code
    }
    isRight = false
    isLeft = true
} 

export class Right<T> {
    constructor(public data: T, public message?:string, public code: number  = 200
    ){
        this.data = data
    }
    isRight = true
    isLeft = false
}


export class HttpResultSuccess<T> extends Right<T> {
    constructor(data: T, message:string){
        super(data, message, 200)
    }
}

export class HttpResultCreated<T> extends Right<T> {
    constructor(data: T, message:string){
        super(data, message, 201)
    }
}

export class ResponseFromMethod<T> extends Right<T> {
    constructor(data: T){
        super(data)
    }
}