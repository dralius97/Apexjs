import { HttpRequest } from "../../domain/http/http"
import { Either } from "../../domain/signal/railway"

export type MdwFN = (args: HttpRequest) => Promise<Either<void>>