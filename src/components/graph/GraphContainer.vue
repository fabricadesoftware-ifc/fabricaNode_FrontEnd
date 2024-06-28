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
</script>

<template>
  <div>
    <div class="graph">
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
  height: 86vh;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
