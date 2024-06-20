<script setup lang="ts">
import { useGraphStore } from '@/stores/graph/graph';

const graphStore = useGraphStore();
</script>

<template>
    <div class="demo-control-panel">
      <label for="nodeCount">Número de nós:</label>
      <input id="nodeCount" type="number" v-model="graphStore.nodeCount" :min="3" :max="200" class="styled-input" />
      <input id="d3ForceEnabled" type="checkbox" v-model="graphStore.d3ForceEnabled" />
      <label for="d3ForceEnabled">Ativar gravidade</label>
    </div>
</template>

<style scoped>
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
