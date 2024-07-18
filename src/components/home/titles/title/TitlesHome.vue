<script lang="ts" setup>
defineProps({
  FirstTitle: String,
  SecondTitle: String,
  ThirdTitle: String,
});
</script>
<template>
  <div class="titles-container">
    <h1 class="title-home">{{ FirstTitle }} {{ SecondTitle }} {{ ThirdTitle }}</h1>
  </div>
</template>

<style scoped>
.titles-container {
  display: grid;
  width: min-content;
}

.title-home {
  width: min-content;
  background-image: linear-gradient(#1e1e1e, #636363);
  background-clip: text;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
  z-index: 2;
  font-family: "Montserrat", sans-serif;
  font-size: 100px;
  font-weight: bold;
  position: relative;
  margin-top:70px;
  line-height: 100px;
}

</style>
