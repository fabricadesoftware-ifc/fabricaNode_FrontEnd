import { authors } from "../../../mock"
import type { IAuthor } from "@/interfaces"

export default class AuthorService {
    getAuthos(): IAuthor[] {
        return authors
    }

    getAuthorById(id: number): IAuthor | undefined {
        return authors.find((publicate: IAuthor) => publicate.id === id)
    }

}