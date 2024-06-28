import { onMounted, reactive } from 'vue';
import { useGraphStore } from '@/stores/graph/graph';
import { generateGraphFromArticles } from '@/utils'

import { articles } from '../../../mock';

export function useSetGraph() {
    const { setGraphData } = useGraphStore();
    const { edges, nodes } = generateGraphFromArticles(articles)

    const currentConnections = reactive({ nodes, edges });

    onMounted(() => setGraphData(nodes, edges));
    return { currentConnections };
}