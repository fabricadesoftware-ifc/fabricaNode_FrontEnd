<script lang="ts" setup>
import { FastLinks, FooterTitles } from "@/components";
import { useTemplateStore } from "@/stores";

const templateStore = useTemplateStore();
</script>
<template>
  <div class="links">
    <div>
      <FooterTitles
        v-for="(text, index) in templateStore.footerTitles"
        :key="index"
        :title="text.linksTitle"
      />
      <ul>
        <FastLinks
          v-for="(text, index) in templateStore.titles"
          :key="index"
          :title="text.text"
          :link="text.link"
        />
      </ul>
    </div>
  </div>
</template>
<style scoped>
.links {
  display: flex;
  min-height: 120px;
  width: 26.66vw;
}
.footer-li {
  color: white;
  font-family: "Montserrat", sans-serif;
  list-style: none;
  font-weight: 450;
  margin: 5px;
}

@media (max-width: 900px) {
  .links {
    min-height: 100px;
  }
}
</style>
