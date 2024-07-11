<script lang="ts" setup>
defineProps({
  title: String,
  link: String,
});
</script>
<template>
  <RouterLink class="router-link" :to="link">
    <li class="footer-li">{{ title }}</li>
  </RouterLink>
</template>
<style scoped>
.footer-li {
  color: white;
  font-family: "Montserrat", sans-serif;
  list-style: none;
  font-weight: 450;
  margin: 5px;
}
.router-link {
  text-decoration: none;
}
</style>
