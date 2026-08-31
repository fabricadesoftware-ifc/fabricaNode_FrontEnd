import type { IType } from '@/interfaces';

// Espelha os choices reais de Publicacao.tipo no backend
// (core/fabricaNode/models/publicacao.py) — não é dado mockado,
// é o enum do backend replicado no front.
const types: IType[] = [
    { id: 'RESUM', name: 'Resumo Expandido' },
    { id: 'FULLP', name: 'Full Paper' },
    { id: 'LIVRO', name: 'Livro' },
    { id: 'CAPLI', name: 'Capítulo de Livro' },
    { id: 'TESES', name: 'Tese de Doutorado' },
    { id: 'DISSE', name: 'Dissertação de Mestrado' },
    { id: 'RELAT', name: 'Relatório Técnico' },
    { id: 'MONOG', name: 'Trabalho de Conclusão de Curso' },
    { id: 'OUTRO', name: 'Outro' },
]

export default class TypeService {
    getTypes(): IType[] {
        return types
    }

    getTypeById(id: string): IType | undefined {
        return types.find((type: IType) => type.id === id)
    }
}
