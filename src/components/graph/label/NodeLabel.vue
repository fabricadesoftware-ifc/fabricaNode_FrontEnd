<script lang="ts" setup>
import { useNodeStore, useTemplateStore } from '@/stores';

const nodeStore = useNodeStore();
const templateStore = useTemplateStore();
</script>

<template>
  <div
    ref="tooltip"
    class="tooltip"
    :style="{
      opacity: templateStore.tooltipOpacity,
      position: 'absolute',
      top: nodeStore.currentNodePosition.y + 'px',
      left: nodeStore.currentNodePosition.x + 'px',
    }"
  >
    <div>{{ nodeStore.currentNode.node }}</div>
  </div>
</template>

<style scoped>
.tooltip {
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  width: 500px;
  height: auto;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 12px;
  background-color: #fff0bd;
  border: 1px solid #ffb950;
  box-shadow: 2px 2px 2px #aaa;
  transition: opacity 0.2s linear;
  pointer-events: none;
}
</style>
