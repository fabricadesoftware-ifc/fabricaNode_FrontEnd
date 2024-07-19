<script lang="ts" setup>
import { computed } from 'vue';
import { AccountOutline } from '@/components/icons';
import { useNodeStore } from '@/stores';

const nodeStore = useNodeStore();

const authorNames = computed(() => {
  return nodeStore?.currentNode?.node?.authors?.map(author => author.name).join(', ') || '';
});
</script>

<template>
  <div class="node-author">
    <AccountOutline class="icon-author" size="15" />
    {{ authorNames }}
  </div>
</template>

<style scoped>
.node-author {
  font-size: 13px;
  color: #22262F;
  margin: 8px 0 0 0px;
  display: flex;
  align-items: center;
}

.icon-author {
  margin-right: 4px;
}
</style>
