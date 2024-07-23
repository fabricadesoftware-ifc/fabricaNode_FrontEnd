<script setup lang="ts">
import { GraphContainer } from '@/components';

import { useAuth, useSetGraph } from '@/composables';
import { useGraphStore } from '@/stores';

const { configs } = useGraphStore();

const { currentConnections } = useSetGraph();
useAuth();
</script>

<template>
  <div>
      <div class="container">
        <GraphContainer :nodes="currentConnections.nodes" :edges="currentConnections.edges" :configs="configs"/>
      </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
</style>
