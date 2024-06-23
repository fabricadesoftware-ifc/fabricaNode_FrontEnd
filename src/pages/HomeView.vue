<script setup lang="ts">
import { GraphContainer, PainelControl } from '@/components'
import {useRouter} from 'vue-router'

import { useGraph } from '@/composables';
import { useGraphStore, useAuthStore } from '@/stores'

const { nodes, edges, configs } = useGraphStore()

import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

const authStore = useAuthStore();

const router = useRouter()

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});

useGraph()
</script>

<template>
  <div class="container">
   <GraphContainer :nodes="nodes" :edges="edges" :configs="configs"/>
   <PainelControl/>
   <button @click="router.push('/login')">Login</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.graph {
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.demo-control-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.styled-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 80px;
}
</style>
