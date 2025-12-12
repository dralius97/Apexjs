import { HttpRequest } from "../../domain/http/http";
import { Either, Left, Ok } from "../../domain/signal/railway";

export const palindromeDTO = async (req:HttpRequest): Promise<Either<void>> => {
    const body = req.body
    if(!body['text']) return new Left('Text Must Exist', 400)
    return new Ok()
} 