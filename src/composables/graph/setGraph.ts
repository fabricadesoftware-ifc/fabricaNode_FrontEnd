import { onMounted, reactive, watch } from 'vue';
import { useGraphStore, usePublicationStore } from '@/stores';
import { generateGraphFromArticles } from '@/utils';

export function useSetGraph() {
    const { populatePublications, entirePublications } = usePublicationStore();
    const { setGraphData } = useGraphStore();

    populatePublications();

    const { edges, nodes } = generateGraphFromArticles(entirePublications);
    const currentConnections = reactive({ nodes, edges });

    onMounted(() => setGraphData(nodes, edges));

    watch(
        () => entirePublications,
        (newValue) => {

            const newPublications = generateGraphFromArticles(newValue);
            setGraphData(newPublications.nodes, newPublications.edges);
            currentConnections.nodes = newPublications.nodes;
            currentConnections.edges = newPublications.edges;
        }
    );

    return { currentConnections };
};