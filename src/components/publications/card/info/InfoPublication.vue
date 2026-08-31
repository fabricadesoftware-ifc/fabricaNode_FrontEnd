<script lang="ts" setup>
import { useFilterStore } from '@/stores';

defineProps({
  authors: {
    type: Array,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  }
});

const filterStore = useFilterStore();

function filtrarPorAutor(author: any) {
  filterStore.updateOption([author.id], 3);
}
</script>

<template>
  <div>
    <div class="info-article">
      Autores:
      <div v-for="(author, index) in authors" :key="index" class="text-inline">
        <a href="#" @click.prevent="filtrarPorAutor(author)"
          >{{ author.name }}<span v-if="index < authors.length - 2">, </span>
          <span v-else-if="index === authors.length - 2"> e </span></a
        >
      </div>
    </div>
    <div class="info-article">
      Palavras-chave:
      <div v-for="(keyword, index) in keywords" :key="index" class="text-inline text-underline">
        <span>{{ keyword.key }} <span v-if="index < keywords.length - 1">, </span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-article {
  color: #464343;
  font-weight: 400;
  display: block;
  margin-bottom: 14px;
}

.text-inline {
  display: inline;
}

.text-underline {
  text-decoration: underline;
}

a {
  color: #464343;
}

a:hover {
  text-decoration: underline;
  transition: 3s;
}
</style>
