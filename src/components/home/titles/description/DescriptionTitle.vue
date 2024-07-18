<script lang="ts" setup>
defineProps({
  Subtitle: String,
});
</script>
<template>
  <h2 class="title-description">{{ Subtitle }}</h2>
</template>

<style scoped>
.title-description {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 450;
  width: 400px;
  color: #575757;
  margin: 20px 0px;
}
</style>
