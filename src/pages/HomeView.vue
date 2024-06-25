<script setup lang="ts">
import { GraphContainer, PainelControl } from '@/components';

import { useGraph, useAuth } from '@/composables';
import { useGraphStore } from '@/stores';

const { nodes, edges, configs } = useGraphStore();

useGraph();
useAuth();
</script>

<template>
  <div class="container">
   <GraphContainer :nodes="nodes" :edges="edges" :configs="configs"/>
   <PainelControl/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
