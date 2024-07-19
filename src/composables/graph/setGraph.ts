import { onMounted, reactive } from 'vue';
import { useGraphStore, usePublicationStore } from '@/stores';
import { generateGraphFromArticles } from '@/utils'

import { publications } from '../../../mock';

export function useSetGraph() {
    const { setGraphData } = useGraphStore();
    const { edges, nodes } = generateGraphFromArticles(publications)

    const { populatePublications } = usePublicationStore()

    const currentConnections = reactive({ nodes, edges });


    onMounted(() => {
        populatePublications()
        setGraphData(nodes, edges)
    }

    )

    return { currentConnections };
}