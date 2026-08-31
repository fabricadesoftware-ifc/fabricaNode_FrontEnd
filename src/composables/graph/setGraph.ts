import { reactive, watch } from 'vue';
import { useGraphStore, usePublicationStore } from '@/stores';
import { generateGraphFromArticles } from '@/utils';

export function useSetGraph() {
    const publicationStore = usePublicationStore();
    const { setGraphData } = useGraphStore();

    // populatePublications já é disparado uma vez no boot do app (main.ts);
    // chamar de novo aqui corria em paralelo com aquela chamada e duplicava
    // cada publicação no array (cada uma das duas resetava e empurrava os
    // mesmos itens). O watch abaixo já reage assim que main.ts terminar.

    const currentConnections = reactive({ nodes: {}, edges: {} });

    watch(
        () => publicationStore.entirePublications,
        (newValue) => {
            const { nodes, edges } = generateGraphFromArticles(newValue);
            setGraphData(nodes, edges);
            currentConnections.nodes = nodes;
            currentConnections.edges = edges;
        },
        { deep: true, immediate: true }
    );

    return { currentConnections };
};
