import { watch, ref } from "vue";
import { useGraphStore } from '@/stores/graph/graph';

export function useGraph() {
    const graphStore = useGraphStore();
    const currentNodes = ref(15);

    graphStore.buildNetwork(graphStore.nodeCount, graphStore.nodes, graphStore.edges);

    watch(
        () => graphStore.nodeCount,
        (newValue) => {
            currentNodes.value = newValue;
            graphStore.buildNetwork(newValue, graphStore.nodes, graphStore.edges);
        }
    );

    return { currentNodes };
}