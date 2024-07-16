import { keywords } from "../../../mock"
import type { IKeyword } from "@/interfaces"

export default class KeywordService {
    getKeywords(): IKeyword[] {
        return keywords
    }

    getKeywordById(id: number): IKeyword | undefined {
        return keywords.find((publicate: IKeyword) => publicate.id === id)
    }

}