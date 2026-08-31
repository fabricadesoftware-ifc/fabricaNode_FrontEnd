import { Api } from '@/plugins';

export interface IOrcidCandidato {
    orcid_id: string;
    nome: string;
    instituicoes: string[];
}

export interface IOrcidObra {
    put_code: number;
    titulo: string;
    ano: string | null;
    tipo: string;
    url: string;
}

export interface IOrcidConfirmarResposta {
    autor_id: number;
    publicacoes_importadas: number[];
}

export default class OrcidService {
    private api = new Api();

    async buscarPorNome(nome: string): Promise<IOrcidCandidato[]> {
        const response = await this.api.client.get('orcid/buscar/', { params: { nome } });
        return response.data;
    }

    async listarObras(orcidId: string): Promise<IOrcidObra[]> {
        const response = await this.api.client.get(`orcid/obras/${orcidId}/`);
        return response.data;
    }

    async confirmar(orcidId: string, putCodes: number[]): Promise<IOrcidConfirmarResposta> {
        const response = await this.api.client.post('orcid/confirmar/', {
            orcid_id: orcidId,
            obras: putCodes,
        });
        return response.data;
    }
}
