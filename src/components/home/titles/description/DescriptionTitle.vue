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
  font-size: 25px;
  font-weight: 400;
  width: 460px;
  color: #ea6e18;
  margin: 20px 0px;
}
</style>
