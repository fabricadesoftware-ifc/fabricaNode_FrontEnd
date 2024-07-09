<script lang="ts" setup>
import { useTemplateStore } from '@/stores'

const templateStore = useTemplateStore()

defineProps({
  img: String,
  link: String
})
</script>
<template>
  <div class="container-midia">
    <a v-for="(text, index) in templateStore.footerMidia" :href="text.link" :key="index"
      ><img :src="text.img" width="55px" />{{ text.img }}</a
    >
  </div>
</template>
<style scoped>
.container-midia img {
  margin: 20px 10px;
}
</style>
