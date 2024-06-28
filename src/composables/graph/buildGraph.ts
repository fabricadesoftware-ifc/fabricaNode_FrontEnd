import { watch, ref } from 'vue';
import { useGraphStore, useNodeStore, useEdgeStore } from '@/stores';

export function useBuildGraph() {
    const graphStore = useGraphStore();
    const nodeStore = useNodeStore();
    const edgeStore = useEdgeStore();
    const currentNodes = ref(15);

    graphStore.buildNetwork(currentNodes.value, nodeStore.nodes, edgeStore.edges);

    watch(
        () => currentNodes.value,
        (newValue) => {
            currentNodes.value = newValue;
            graphStore.buildNetwork(newValue, nodeStore.nodes, edgeStore.edges);
        }
    );

    return { currentNodes };
}