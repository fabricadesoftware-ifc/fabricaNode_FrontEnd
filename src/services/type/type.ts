import { types } from "../../../mock"
import type { IType } from "@/interfaces"

export default class TypeService {
    getTypes(): IType[] {
        return types
    }

    getTypeById(id: number): IType | undefined {
        return types.find((type: IType) => type.id === id)
    }

}