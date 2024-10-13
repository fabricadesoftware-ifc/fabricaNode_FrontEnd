<script lang="ts" setup>
import { CardPublication, TitlePage, FilterPage } from '@/components';
</script>

<template>
  <section class="article-pages">
    <section class="container-articles">
      <TitlePage title="Publicações" />
      <CardPublication />
    </section>
    <section class="container-filter">
      <FilterPage />
    </section>
  </section>
</template>

<style scoped>
.article-pages {
  height: auto;
  margin-top: 22vh;
  display: flex;
}

.container-articles {
  width: 80vw;
  padding: 0px 100px;
}

.container-filter {
  width: 20vw;
  height: 800px;
  position: sticky;
  top: 150px;
}
</style>
