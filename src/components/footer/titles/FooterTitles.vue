<script lang="ts" setup>
defineProps({
  title: String,
});
</script>
<template>
  <h1 class="footer-titles">{{ title }}</h1>
</template>
<style scoped>
.footer-titles {
  font-family: "Montserrat", sans-serif;
  color: #ea6e18;
  font-size: 20px;
  font-weight: 550;
}
</style>
