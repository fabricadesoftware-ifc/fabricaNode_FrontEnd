import { Api } from '@/plugins';
import { fetchAllPages } from '@/utils';
import type { ICategory } from '@/interfaces';

interface IAreaResponse {
    id: number;
    nome: string;
    cor: string;
}

export default class CategoryService {
    private api = new Api();
    private cache: Promise<ICategory[]> | null = null;

    private all(): Promise<ICategory[]> {
        if (!this.cache) {
            this.cache = fetchAllPages<IAreaResponse>(this.api.client, 'areas/').then((areas) =>
                areas.map((area) => ({
                    id: area.id,
                    name: area.nome,
                    color: area.cor,
                    favorite: false,
                }))
            );
        }
        return this.cache;
    }

    async getCategory(): Promise<ICategory[]> {
        return this.all();
    }

    async getCategoryById(id: number): Promise<ICategory | undefined> {
        const categories = await this.all();
        return categories.find((category) => category.id === id);
    }
}
