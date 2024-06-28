import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useNodeStore = defineStore('node', () => {

    const nodes = reactive({});
    const currentNode = reactive({node: []})
    const currentNodePosition = reactive({
        x: 0,
        y: 0
    });

    return { nodes, currentNode, currentNodePosition };
});
