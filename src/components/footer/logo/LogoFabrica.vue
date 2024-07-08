<script lang="ts" setup></script>
<template>
  <div class="img-logo-fabrica">
    <img src="@/assets/logo-fabrica-de-software.png" />
  </div>
</template>
<style scoped>
.img-logo-fabrica,
.links,
.contato {
  display: flex;
  min-height: 120px;
  width: 26.66vw;
}
.img-logo-fabrica img {
  width: 200px;
}

@media (max-width: 900px) {
  .img-logo-fabrica img {
    width: 150px;
  }
  .img-logo-fabrica {
    min-height: 100px;
  }
}
</style>
