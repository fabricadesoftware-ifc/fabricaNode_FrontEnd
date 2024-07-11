<script lang="ts" setup>
import { useNodeStore, useTemplateStore } from '@/stores';
import AccountOutline from "vue-material-design-icons/AccountOutline.vue"

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
    <div class="category-position">
      <div class="node-category" v-for="(categoria, index) in nodeStore.currentNode.node.categoria" :key="index">
        {{  categoria  }}
      </div>
    </div>

    <div class="node-name">
      {{ nodeStore.currentNode.node.name }}
    </div>
    <div class="node-author">
      <AccountOutline class="icon-author" size="15" />
      {{ nodeStore.currentNode.node.author }}
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Montserrat";
}

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

.node-category {
  font-size: 13px;
  color: #324CD6;
  margin: 2px 0 10px 0;
  border-right: 1px solid #000000;
  padding: 0 5px 0 5px;
}

.node-category:last-child{
  border-right: none;
}

.category-position {
  display: flex;
  flex-direction: row;
  /* height: 33px;
  align-items: center; */
}

.node-name {
  font-size: 14px;
  margin-left: 10px;
}

.node-author {
  font-size: 13px;
  color: #22262F;
  margin: 8px 0 0 0px;
  display: flex;
}

.icon-author {
  margin: 0 4px 0 8px;
  align-items: baseline;
}
</style>
