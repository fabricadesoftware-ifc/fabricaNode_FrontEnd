<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <button class="button-see-graph" @click="router.push({ name: 'graph' })">Ver Grafo</button>
</template>

<style scoped>
.button-see-graph {
  width: max-content;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  background-color: #267a7a;
  padding: 15px 60px;
  color: white;
  margin: 30px 0px;
}
.button-see-graph:hover {
  background-color: #ea6e18;
  transition: 0.5s;
}
</style>
