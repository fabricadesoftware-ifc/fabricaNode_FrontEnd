<script lang="ts" setup>
import { AccountOutline } from '@/components/icons';
import { useNodeStore } from '@/stores';


const nodeStore = useNodeStore();
</script>

<template>
  <div class="node-author">
    <AccountOutline class="icon-author" size="15" />
    {{ nodeStore.currentNode.node.authors }}
  </div>
</template>

<style scoped>
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