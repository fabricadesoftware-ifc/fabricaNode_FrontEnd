import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import * as vNG from "v-network-graph"
import { ForceLayout } from "v-network-graph/lib/force-layout"

export const useGraphStore = defineStore('graph', () => {
    const nodeCount = ref(15)
    const nodes = reactive({})
    const edges = reactive({})

    const layoutHandler: vNG.LayoutHandler = new ForceLayout()

    const configs = reactive(
        vNG.defineConfigs({
            view: {
                layoutHandler,
            },
            node: {
                label: {
                    visible: true,
                },
            },
        })
    )

    const d3ForceEnabled = computed({
        get: () => configs.view.layoutHandler instanceof ForceLayout,
        set: (value: boolean) => {
            if (value) {
                configs.view.layoutHandler = new ForceLayout()
            } else {
                configs.view.layoutHandler = new vNG.SimpleLayout()
            }
        },
    })

    function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
        const idNums = [...Array(count)].map((_, i) => i)

        const newNodes = idNums.reduce((acc, id) => {
            acc[`node${id}`] = {}
            return acc
        }, {} as vNG.Nodes)
        Object.keys(nodes).forEach(id => delete nodes[id])
        Object.assign(nodes, newNodes)

        const makeEdgeEntry = (id1: number, id2: number): [string, vNG.Edge] => {
            return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
        }
        const newEdgesArray = idNums
            .map(n => [n, (Math.floor(n / 5) * 5) % count])
            .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
            .map(([n, m]) => makeEdgeEntry(n, m))

        const newEdges = newEdgesArray.reduce((acc, [key, value]) => {
            acc[key] = value
            return acc
        }, {} as vNG.Edges)

        Object.keys(edges).forEach(id => delete edges[id])
        Object.assign(edges, newEdges)
    }

    return {nodeCount, nodes, edges, d3ForceEnabled, buildNetwork, configs}
})
