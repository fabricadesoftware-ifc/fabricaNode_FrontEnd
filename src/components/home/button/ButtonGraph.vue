<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ArrowRight } from '@/components/icons';
const router = useRouter()
</script>
<template>
  <button class="button-see-graph" @click="router.push({ name: 'graph' })">Ver grafo <ArrowRight size="30" class="arrow-right"/></button>
</template>

<style scoped>
.button-see-graph {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 111.11px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  background-color: #267A7A;
  padding: 10px 45px;
  color: white;
  margin: 58px 0px;
}
.button-see-graph:hover {
  background-color: #ea6e18;
  transition: 0.5s;
}
.arrow-right{
  margin-left: 15px;
  margin-top: 5px;
}
.button-see-graph:hover{
  background-color: #225c5c;
  transition: 0.5s;
}
</style>
