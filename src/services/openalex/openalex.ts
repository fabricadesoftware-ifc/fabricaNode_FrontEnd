import { Api } from '@/plugins';

export interface IOpenAlexCandidato {
    openalex_id: string;
    nome: string;
    instituicoes: string[];
    obras_count: number;
}

export interface IOpenAlexObra {
    openalex_id: string;
    titulo: string;
    ano: number | null;
    tipo: string;
    url: string;
    keywords: string[];
}

export interface IOpenAlexConfirmarResposta {
    autor_id: number;
    publicacoes_importadas: number[];
}

export default class OpenAlexService {
    private api = new Api();

    async buscarPorNome(nome: string): Promise<IOpenAlexCandidato[]> {
        const response = await this.api.client.get('openalex/buscar/', { params: { nome } });
        return response.data;
    }

    async listarObras(openalexId: string): Promise<IOpenAlexObra[]> {
        const response = await this.api.client.get(`openalex/obras/${openalexId}/`);
        return response.data;
    }

    async confirmar(openalexId: string, obraIds: string[]): Promise<IOpenAlexConfirmarResposta> {
        const response = await this.api.client.post('openalex/confirmar/', {
            openalex_id: openalexId,
            obras: obraIds,
        });
        return response.data;
    }
}
