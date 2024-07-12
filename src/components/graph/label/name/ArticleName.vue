<script lang="ts" setup>
import { useNodeStore } from '@/stores';

const nodeStore = useNodeStore();
</script>

<template>
     <div class="node-name">
      {{ nodeStore.currentNode.node.name }}
    </div>
</template>

<style scoped>
.node-name {
  font-size: 14px;
  margin-left: 10px;
}
</style>