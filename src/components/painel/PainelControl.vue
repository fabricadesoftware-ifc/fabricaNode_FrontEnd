<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useGraphStore } from '@/stores';

const router = useRouter();
const graphStore = useGraphStore();
</script>

<template>
  <div class="demo-control-panel">
    <p>Número de nós: 0</p>
    <div>
      <label for="d3ForceEnabled">Ativar gravidade: </label>
      <input id="d3ForceEnabled" type="checkbox" v-model="graphStore.d3ForceEnabled" />
      <button @click="router.push('/login')">Login</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}
.demo-control-panel {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100vw;
  height: 10vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
