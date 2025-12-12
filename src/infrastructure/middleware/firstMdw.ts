import { HttpRequest } from "../../domain/http/http";
import { Either, Ok } from "../../domain/signal/railway";

export const firstMdw = async (_req: HttpRequest): Promise<Either<void>> => {
    console.log('ini harusnya jalan pertama')
    return new Ok()
}