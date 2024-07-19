import { publications } from "../../../mock"
import type { IPublication } from "@/interfaces"

export default class PublicationService {
    getPublications(): IPublication[] {
        return publications
    }

    getPublicateById(id: number): IPublication | undefined {
        return publications.find((publication: IPublication) => publication.id === id)
    }

}