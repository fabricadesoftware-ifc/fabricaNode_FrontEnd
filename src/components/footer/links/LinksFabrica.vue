<script lang="ts" setup>
import GithubImg from '@/assets/images/logo-github.png'
import InstagramImg from '@/assets/images/logo-instagram.png'
import LinkedIn from '@/assets/images/logo-linked-in.png'
import ImgTwiter from '@/assets/images/logo-twiter.png'
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
      ><img
        :src="
          text.img == 'github'
            ? GithubImg
            : text.img == 'instagram'
              ? InstagramImg
              : text.img == 'linked-in'
                ? LinkedIn
                : text.img == 'twiter'
                  ? ImgTwiter
                  : ''
        "
    /></a>
  </div>
</template>
<style scoped>
.container-midia img {
  margin: 20px 10px;
  width: 55px;
}
</style>
