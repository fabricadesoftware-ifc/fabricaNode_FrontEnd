<script lang="ts" setup>
import { Bookmark, BookmarkOutline } from '@/components/icons'

defineProps(['publication'])
</script>

<template>
  <div class="utility-article">
    <div class="favorite-article" @click="$emit('favorite', publication)">
      <div v-if="publication.favorite">
        <Bookmark size="20" />
      </div>
      <div v-else>
        <BookmarkOutline size="20" />
      </div>
      <span> Favoritar</span>
    </div>
    <div><a href="">Artigos Relacionados</a></div>
  </div>
</template>

<style scoped>
.utility-article {
  display: flex;
  gap: 27px;
}

.utility-article a {
  color: black;
}

.favorite-article {
  display: flex;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
  transition: 3s;
}
</style>
