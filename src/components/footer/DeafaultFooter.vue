<script lang="ts" setup>
import { FabricaContact, LinksFabrica, LinksHeader, LogoFabrica } from '@/components';
</script>
<template>
  <footer>
    <div class="container">
      <LogoFabrica />
      <LinksHeader />
      <FabricaContact />
    </div>
    <hr class="footer-hr" />
    <LinksFabrica />
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
  height: 450px;
}
.container {
  display: flex;
  align-items: center;
  width: 80vw;
  justify-content: space-between;
  margin: 100px;
}
.footer-hr {
  height: 1px;
  width: 80vw;
  background-color: rgb(255, 255, 255);
}
</style>
