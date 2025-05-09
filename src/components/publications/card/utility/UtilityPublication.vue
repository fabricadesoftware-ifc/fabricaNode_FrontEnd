<script lang="ts" setup>
import { Bookmark, BookmarkOutline } from '@/components/icons';

defineProps(['data']);
</script>

<template>

    <div class="favorite-article" @click="$emit('favorite', data)">
      <div v-if="data.favorite">
        <Bookmark size="20" />
      </div>
      <div v-else>
        <BookmarkOutline size="20" />
      </div>
      <span> Favoritar</span>
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

</style>
