<script lang="ts" setup>
import { SearchPage } from '@/components';

defineProps(["title"]);
</script>

<template>
  <section class="container-title">
    <div>
      <h1>{{ title }}</h1>
      <SearchPage />
    </div>
    <div class="total-article">Total De {{ title }}: 400</div>
  </section>
</template>

<style scoped>
.container-title div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.container-title {
  margin-bottom: 46px;
}

h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
}

.total-article {
  font-size: 16px;
  color: #949494;
  font-weight: 600;
}
</style>
