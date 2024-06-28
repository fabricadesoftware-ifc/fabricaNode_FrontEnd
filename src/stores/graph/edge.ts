import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useEdgeStore = defineStore('edge', () => {

    const edges = reactive({});
    const currentEdge = reactive({edge: []});
    const currentEdgePosition = reactive({
        x: 0,
        y: 0
    });

    return { edges, currentEdge, currentEdgePosition };
});
