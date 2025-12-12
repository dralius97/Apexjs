import { HttpRequest } from "../../domain/http/http"
import { Left, Ok, Right } from "../../domain/signal/railway"
import { MdwFN } from "./type"

export class Middleware {
    private middleware: Map<string|symbol, MdwFN[] >
    constructor(){
        this.middleware = new Map()
    }
    add(key:string|symbol, fnChain: MdwFN[]){
        this.middleware.set(key, fnChain)
    }
    execute = (key: string|symbol) => async (req:HttpRequest): Promise<Right<void> | Left | void> => {
        if(!this.middleware.has(key)) return
        const md = this.middleware.get(key)
        let result: Right<void> | Left = new Ok()
        for (const fn of md!) {
            result = await fn(req)
            if(result instanceof Left){
                break
            }
        }
        return result
    }
}

