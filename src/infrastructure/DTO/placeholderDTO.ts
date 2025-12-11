import { HttpRequest } from "../../domain/http/http";
import { Either, Left, Right } from "../../domain/signal/railway";

export const palindromeDTO = async (req:HttpRequest): Promise<Either<boolean>> => {
    if(!req.body) return new Left('Body Must Exist', 400)
        const body = req.body
    if(!body['text']) return new Left('Text Must Exist', 400)
    return new Right(true)
} 