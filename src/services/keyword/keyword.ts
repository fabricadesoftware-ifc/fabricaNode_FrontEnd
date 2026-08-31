import { Api } from '@/plugins';
import { fetchAllPages } from '@/utils';
import type { IKeyword } from '@/interfaces';

interface IKeywordResponse {
    id: number;
    palavra: string;
}

export default class KeywordService {
    private api = new Api();
    private cache: Promise<IKeyword[]> | null = null;

    private all(): Promise<IKeyword[]> {
        if (!this.cache) {
            this.cache = fetchAllPages<IKeywordResponse>(this.api.client, 'keywords/').then((keywords) =>
                keywords.map((keyword) => ({
                    id: keyword.id,
                    key: keyword.palavra,
                    favorite: false,
                }))
            );
        }
        return this.cache;
    }

    async getKeywords(): Promise<IKeyword[]> {
        return this.all();
    }

    async getKeywordById(id: number): Promise<IKeyword | undefined> {
        const keywords = await this.all();
        return keywords.find((keyword) => keyword.id === id);
    }
}
