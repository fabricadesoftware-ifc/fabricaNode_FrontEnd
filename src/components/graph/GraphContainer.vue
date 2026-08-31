<script setup lang="ts">
import { NodeLabel } from '@/components';
import { useToolTipGraph } from '@/composables';
import { useGraphStore, useEventStore } from '@/stores';

defineProps({
  nodes: Object,
  edges: Object,
  configs: Object,
});

const graphStore = useGraphStore();
const eventStore = useEventStore();

useToolTipGraph();

// Com Ctrl (ou Cmd) pressionado, o zoom no scroll vai mais rápido do que o
// padrão da lib. Intercepta no capture (antes do handler interno do
// svg-pan-zoom) e só segue com o zoom acelerado quando a tecla está
// pressionada; sem Ctrl, deixa o comportamento padrão da lib rolar normal.
function handleWheel(event: WheelEvent) {
  if (!event.ctrlKey && !event.metaKey) return;

  const instance = graphStore.panZoomInstance;
  const svg = (event.currentTarget as HTMLElement).querySelector('svg');
  if (!instance || !svg) return;

  event.preventDefault();
  event.stopPropagation();

  const sensitivity = 0.4;
  const zoom = Math.pow(1 + sensitivity, event.deltaY > 0 ? -1 : 1);

  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const svgPoint = point.matrixTransform(svg.getScreenCTM()!.inverse());

  instance.zoomAtPoint(zoom, svgPoint);
}
</script>

<template>
  <div>
    <div class="graph" @wheel.capture="handleWheel">
      <v-network-graph
        :zoom-level="2"
        :nodes="nodes"
        :edges="edges"
        :configs="configs"
        :event-handlers="eventStore.eventHandlers"
        :ref="graphStore.graph"
      />
    </div>
    <NodeLabel />
  </div>
</template>

<style scoped>
.graph {
  width: 100vw;
  height: 100vh;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
