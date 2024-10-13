<script lang="ts" setup>
import { ChevronDown } from '@/components/icons';

defineProps(['titulo', 'open']);
</script>

<template>
  <div class="filter-name" @click="$emit('OpenMenu')">
    <div>{{ titulo }}</div>
    <div v-if="open">
      <ChevronDown class="filter-icon-open" />
    </div>
    <div v-else>
      <ChevronDown class="filter-icon-close" />
    </div>
  </div>
</template>

<style scoped>
.filter-icon-open {
  display: flex;
  transform: rotate(180deg);
}

.filter-icon-close {
  display: flex;
}

.filter-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
