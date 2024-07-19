import { onMounted, reactive } from 'vue';
import { useGraphStore, usePublicationStore } from '@/stores';
import { generateGraphFromArticles } from '@/utils'

export function useSetGraph() {
    const { populatePublications, entirePublications } = usePublicationStore();
    const { setGraphData } = useGraphStore();

    populatePublications();

    const { edges, nodes } = generateGraphFromArticles(entirePublications);
    const currentConnections = reactive({ nodes, edges });

    onMounted(() => setGraphData(nodes, edges));

    return { currentConnections };
};