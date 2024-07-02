import { defineStore } from 'pinia';

import { useTemplateStore, useNodeStore, useEdgeStore } from '@/stores';

export const useEventStore = defineStore('event', () => {

    const templateStore = useTemplateStore();
    const { currentNodePosition, currentNode, nodes } = useNodeStore();
    const { currentEdge, edges } = useEdgeStore();

    const eventHandlers = {
        "node:pointerover": ({ node, event }: { node: string, event: any }) => {
            currentNodePosition.x = event.x;
            currentNodePosition.y = event.y;
            currentNode.node = nodes[node];
            templateStore.tooltipOpacity = 1;
        },
        "node:pointerout": ({ node }: { node: string }) => {
            templateStore.tooltipOpacity = 0;
            currentNode.node = nodes[node];
        },
        "node:dblclick": ({ node }: { node: string }) => {
            const articleLink = nodes[node]?.link;
            if (articleLink) {
                window.open(articleLink, '_blank');
            }
        },
        "edge:pointerover": ({ edge }: { edge: string }) => {
            currentEdge.edge = edges[edge];
        }
    };

    return { eventHandlers };
});
