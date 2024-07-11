<script lang="ts" setup>
import { FooterTitles } from '@/components'
import { useTemplateStore } from '@/stores'

const templateStore = useTemplateStore()

defineProps({
  text: String
})
</script>
<template>
  <div class="contact">
    <div>
      <FooterTitles
        v-for="(text, index) in templateStore.footerTitles"
        :key="index"
        :title="text.contactTitle"
      />
      <ul>
        <li class="footer-li" v-for="(text, index) in templateStore.footerContact" :key="index">
          {{ text.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.contact {
  display: flex;
  min-height: 120px;
  width: 26.66vw;
}
.footer-li {
  color: white;
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  font-weight: 450;
  margin: 5px;
}

@media (max-width: 900px) {
  .contato {
    min-height: 100px;
  }
}
</style>
