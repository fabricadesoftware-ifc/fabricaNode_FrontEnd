import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

import * as vNG from 'v-network-graph'
import { ForceLayout } from 'v-network-graph/lib/force-layout';

import { useNodeStore, useEdgeStore } from '@/stores';

import { articles } from '../../../mock';
import type { IArticle } from '@/interfaces';

import { generateGraphFromArticles, generateGraphFromKeywords } from '@/utils';

export const useGraphStore = defineStore('graph', () => {

    const nodeStore = useNodeStore();
    const edgeStore = useEdgeStore();

    const graph = ref<vNG.Instance>();

    const layoutHandler: vNG.LayoutHandler = new ForceLayout();

    const configs = reactive(
        vNG.defineConfigs({
            view: {
                layoutHandler,
            },
            node: {
                selectable: true,
                normal: {
                  type: "circle",
                  radius: (node) => node.radius || 16,
                  strokeWidth: 0,
                  strokeColor: "#000000",
                  strokeDasharray: "0",
                  color: "#4466cc",
                },
                hover: {
                  type: "circle",
                  radius: (node) => node.radius || 16,
                  strokeWidth: 0,
                  strokeColor: "#000000",
                  strokeDasharray: "0",
                  color: "#dd2288",
                },
                selected: {
                  type: "circle",
                  radius: (node) => node.radius || 16,
                  strokeWidth: 0,
                  strokeColor: "#000000",
                  strokeDasharray: "0",
                  color: "#4466cc",
                },
                label: {
                  visible: false,
                  fontFamily: undefined,
                  fontSize: 11,
                  lineHeight: 1.1,
                  color: "#000000",
                  margin: 4,
                  direction: "south",
                  background: {
                    visible: false,
                    color: "#ffffff",
                    padding: {
                      vertical: 1,
                      horizontal: 4,
                    },
                    borderRadius: 2,
                  },
                },
                focusring: {
                  visible: true,
                  width: 4,
                  padding: 3,
                  color: "#eebb00",
                  dasharray: "0",
                },
              },
            edge: {
                selectable: true,
                normal: {
                  color: e => e.color || "#000000",
                  width: e => e.width || 1,
                },
                hover: {
                  color: "#EA6E18",
                  width: e => (e.width || 1) + 2,
                },
                selected: {
                  color: "#EA6E18",
                  width: e => e.width || 1,
                  dasharray: "",
                },
                zOrder: {
                  enabled: true,
                  zIndex: n => n.zIndex,
                  bringToFrontOnHover: true,
                  bringToFrontOnSelected: true,
                },
              },
        })
    );

    const currentView = useStorage('teste', {
        layout: 'articles',
    })

    function toggleGraphView(articles: IArticle[]) {
        if (currentView.value.layout === 'articles') {
          const { nodes: keywordNodes, edges: keywordEdges } = generateGraphFromKeywords(articles);
          setGraphData(keywordNodes, keywordEdges);
          currentView.value.layout = 'keywords';
        } else {
          const { nodes: articleNodes, edges: articleEdges } = generateGraphFromArticles(articles);
          setGraphData(articleNodes, articleEdges);
          currentView.value.layout = 'articles';
        }
      }

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

    function setGraphData(newNodes: vNG.Node, newEdges: vNG.Edge) {
        Object.keys(nodeStore.nodes).forEach(id => delete nodeStore.nodes[id]);
        Object.assign(nodeStore.nodes, newNodes);

        Object.keys(edgeStore.edges).forEach(id => delete edgeStore.edges[id]);
        Object.assign(edgeStore.edges, newEdges);
    }


    function toggleView() {
        toggleGraphView(articles)
      }

    return { d3ForceEnabled, buildNetwork, setGraphData, configs, graph, toggleGraphView, toggleView, currentView };
});
