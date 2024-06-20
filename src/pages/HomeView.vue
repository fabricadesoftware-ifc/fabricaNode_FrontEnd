<script setup lang="ts">
import { GraphContainer, PainelControl } from '@/components'

import { useGraph } from '@/composables';
import { useGraphStore } from '@/stores'

const { nodes, edges, configs } = useGraphStore()

useGraph()
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

.graph {
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.demo-control-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.styled-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 80px;
}
</style>
