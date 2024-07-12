<script lang="ts" setup>
import { useNodeStore, useTemplateStore } from '@/stores';
import { CategoryLabel, ArticleName, AuthorName } from '@/components';

const nodeStore = useNodeStore();
const templateStore = useTemplateStore();
</script>

<template>
  <div ref="tooltip" class="tooltip" :style="{
    opacity: templateStore.tooltipOpacity,
    position: 'absolute',
    top: nodeStore.currentNodePosition.y + 'px',
    left: nodeStore.currentNodePosition.x + 'px',
  }">
    <CategoryLabel />
    <ArticleName />
    <AuthorName />
  </div>
</template>

<style scoped>
.tooltip {
  top: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  width: 400px;
  height: auto;
  box-shadow: #75767a56 0px 1px 16px 0px;
  background-color: #ffffff;
  border-left: 20px solid #324CD6;
  transition: opacity 0.2s linear;
  pointer-events: none;
  padding: 15px;
  border-radius: 15px;
  font-weight: 500;
}
</style>
