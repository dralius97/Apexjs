import { HttpRequest } from "../../domain/http/http";
import { Either, Ok } from "../../domain/signal/railway";

export const secondMdw = async (_req: HttpRequest): Promise<Either<void>> => {
    console.log('ini harusnya jalan ke 2')
    return new Ok()
}