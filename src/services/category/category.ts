import { categories } from "../../../mock"
import type { ICategory } from "@/interfaces"

export default class CategoryService {
    getCategory(): ICategory[] {
        return categories
    }

    getCategoryById(id: number): ICategory | undefined {
        return categories.find((publicate: ICategory) => publicate.id === id)
    }

}