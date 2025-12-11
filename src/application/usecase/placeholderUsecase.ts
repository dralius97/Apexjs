import { Either, Right } from "../../domain/signal/railway"

export class PlaceholderUsecase {
    isPalindrome = async (str: string): Promise<Either<boolean>> => {
        const reverse = str.split('').reverse().join('')
        const isPalindrome = reverse === str
        return new Right(isPalindrome)
    }
} 