import { Api } from '@/plugins';
import { fetchAllPages } from '@/utils';
import type { IPublication } from '@/interfaces';

interface IPublicacaoResponse {
    id: number;
    is_favorito: boolean;
    titulo: string;
    url: string;
    abstract: string;
    tipo: string;
    autor: number[];
    keyword: number[];
    categorias: number[];
}

export default class PublicationService {
    private api = new Api();
    private cache: Promise<IPublication[]> | null = null;

    private all(): Promise<IPublication[]> {
        if (!this.cache) {
            this.cache = fetchAllPages<IPublicacaoResponse>(this.api.client, 'publicacaos/').then((publicacoes) =>
                publicacoes.map((publicacao) => ({
                    id: publicacao.id,
                    label: publicacao.titulo,
                    link: publicacao.url,
                    resume: publicacao.abstract,
                    authors: publicacao.autor.map(String),
                    keywords: publicacao.keyword.map(String),
                    categories: publicacao.categorias.map(String),
                    type: publicacao.tipo,
                    favorite: publicacao.is_favorito,
                }))
            );
        }
        return this.cache;
    }

    async getPublications(): Promise<IPublication[]> {
        return this.all();
    }

    async getPublicateById(id: number): Promise<IPublication | undefined> {
        const publications = await this.all();
        return publications.find((publication) => publication.id === id);
    }

    async favoritar(id: number): Promise<boolean> {
        const response = await this.api.client.post(`publicacaos/${id}/favoritar/`);
        return response.data.is_favorito;
    }
}
