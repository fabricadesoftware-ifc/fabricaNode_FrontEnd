import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

import * as vNG from 'v-network-graph'
import { ForceLayout } from 'v-network-graph/lib/force-layout';

import { useNodeStore, useEdgeStore } from '@/stores';

export const useGraphStore = defineStore('graph', () => {

    const nodeStore = useNodeStore();
    const edgeStore = useEdgeStore();

    const graph = ref<vNG.Instance>();

    // Instância do svg-pan-zoom por trás do v-network-graph. Guardada aqui
    // pra permitir zoom manual mais rápido quando Ctrl está pressionado
    // (ver GraphContainer.vue), já que a lib não expõe esse controle nos
    // configs normais.
    const panZoomInstance = ref<any>(null);

    const layoutHandler: vNG.LayoutHandler = new ForceLayout();

    const configs = reactive(
        vNG.defineConfigs({
            view: {
                layoutHandler,
                onSvgPanZoomInitialized: (instance: any) => {
                    panZoomInstance.value = instance;
                },
            },
            node: {
                label: {
                    visible: false,
                }
            },
        })
    );

    const d3ForceEnabled = computed({
        get: () => configs.view.layoutHandler instanceof ForceLayout,
        set: (value: boolean) => {
            if (value) {
                configs.view.layoutHandler = new ForceLayout()
            } else {
                configs.view.layoutHandler = new vNG.SimpleLayout()
            }
        },
    });

    function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
        const idNums = [...Array(count)].map((_, i) => i);

        const newNodes = idNums.reduce((acc, id) => {
            acc[`node${id}`] = {}
            return acc;
        }, {} as vNG.Nodes);
        Object.keys(nodes).forEach(id => delete nodes[id]);
        Object.assign(nodes, newNodes);

        const makeEdgeEntry = (id1: number, id2: number): [string, vNG.Edge] => {
            return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }];
        }
        const newEdgesArray = idNums
            .map(n => [n, (Math.floor(n / 5) * 5) % count])
            .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
            .map(([n, m]) => makeEdgeEntry(n, m));

        const newEdges = newEdgesArray.reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as vNG.Edges);

        Object.keys(edges).forEach(id => delete edges[id]);
        Object.assign(edges, newEdges);
    }

    function setGraphData(newNodes: vNG.Nodes, newEdges: vNG.Edges) {
        Object.keys(nodeStore.nodes).forEach(id => delete nodeStore.nodes[id]);
        Object.assign(nodeStore.nodes, newNodes);

        Object.keys(edgeStore.edges).forEach(id => delete edgeStore.edges[id]);
        Object.assign(edgeStore.edges, newEdges);
    }


    return { d3ForceEnabled, buildNetwork, setGraphData, configs, graph, panZoomInstance };
});
