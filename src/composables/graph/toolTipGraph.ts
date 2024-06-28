import { watch, ref, computed } from 'vue';
import { useGraphStore, useNodeStore, useTemplateStore } from '@/stores';

export function useToolTipGraph() {
    const graphStore = useGraphStore();
    const nodeStore = useNodeStore();
    const templateStore = useTemplateStore();

    const tooltip = ref<HTMLDivElement>();

    const NODE_RADIUS = 16
    const tooltipPos = ref({ left: "0px", top: "0px" })

    const targetNodePos = computed(() => {
        const nodePos = nodeStore.currentNodePosition
        return nodePos || { x: 0, y: 0 }
    })
    watch(
        () => [targetNodePos.value, templateStore.tooltipOpacity],
        () => {
            if (!graphStore.graph || !tooltip.value) return


            const domPoint = graphStore.graph.translateFromSvgToDomCoordinates(targetNodePos.value)

            tooltipPos.value = {
                left: domPoint.x - tooltip.value.offsetWidth / 2 + "px",
                top: domPoint.y - NODE_RADIUS - tooltip.value.offsetHeight - 10 + "px",
            }
        },
        { deep: true }
    )

    return { tooltipPos };
}