import { Api } from '@/plugins';
import { fetchAllPages } from '@/utils';
import type { IAuthor } from '@/interfaces';

interface IAutorResponse {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    is_favorito: boolean;
    biografia: string;
    foto_url: string;
    linkedin: string;
    github: string;
    instagram: string;
}

export default class AuthorService {
    private api = new Api();
    private cache: Promise<IAuthor[]> | null = null;

    private all(): Promise<IAuthor[]> {
        if (!this.cache) {
            this.cache = fetchAllPages<IAutorResponse>(this.api.client, 'autors/').then((autores) =>
                autores.map((autor) => ({
                    id: autor.id,
                    name: `${autor.nome} ${autor.sobrenome}`.trim(),
                    email: autor.email,
                    biography: autor.biografia,
                    photo: autor.foto_url,
                    linkedin: autor.linkedin,
                    github: autor.github,
                    instagram: autor.instagram,
                    favorite: autor.is_favorito,
                }))
            );
        }
        return this.cache;
    }

    async getAuthors(): Promise<IAuthor[]> {
        return this.all();
    }

    async getAuthorById(id: number): Promise<IAuthor | undefined> {
        const authors = await this.all();
        return authors.find((author) => author.id === id);
    }

    async favoritar(id: number): Promise<boolean> {
        const response = await this.api.client.post(`autors/${id}/favoritar/`);
        return response.data.is_favorito;
    }
}
