<script lang="ts" setup>
import { computed } from 'vue';
import { useNodeStore, useTemplateStore } from '@/stores';
import { CategoryLabel, ArticleName, AuthorName } from '@/components';

const nodeStore = useNodeStore();
const templateStore = useTemplateStore();
const authorNames = computed(() => {
  return nodeStore?.currentNode?.node?.authors?.map(author => author.name).join(', ') || '';
});
</script>

<template>
  <div ref="tooltip" class="tooltip" :style="{
    opacity: templateStore.tooltipOpacity,
    position: 'absolute',
    top: nodeStore.currentNodePosition.y + 'px',
    left: nodeStore.currentNodePosition.x + 'px',
  }">
    <CategoryLabel :categories="nodeStore.currentNode.node.categories"/>
    <ArticleName :name="nodeStore.currentNode.node.name"/>
    <AuthorName :authorNames="authorNames" />
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
