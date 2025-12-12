import { PlaceholderUsecase } from "../../application/usecase/placeholderUsecase"
import { Inject } from "../../core/DI/decorator"
import { ValidateField } from "../../core/middleware/decorator"
import { TYPE } from "../../domain/DI/type"
import { HttpRequest } from "../../domain/http/http"
import { Either, HttpResultSuccess, Left } from "../../domain/signal/railway"
import { palindromeDTO } from "../../infrastructure/DTO/placeholderDTO"

export class PlaceholderController {
    @Inject(TYPE.PlaceholderUsecase) private placeholderUsecase!: PlaceholderUsecase 

    @ValidateField(palindromeDTO)
    checkPalindrome = async (req: HttpRequest): Promise<Either<string>> => {
        if(!req.body) return new Left('Body Must Exist', 400)
        const text = req.body.text
        const result = await this.placeholderUsecase.isPalindrome(text)
        if(result instanceof Left) return result
        return new HttpResultSuccess(result.data, 'sukses')
    }
}