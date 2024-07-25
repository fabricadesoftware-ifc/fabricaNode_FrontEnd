<script lang="ts" setup>
import { UserPhoto } from '@/components'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>
<template>
  <div class="user-profile" @click="router.push('/profile')">
    <UserPhoto />
    <span>Vinicius</span>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
}

span{
    position: relative;
}

span::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  position: absolute;
  transition: width 0.5s ease;
  background-color: rgb(56, 56, 56);
}

span:hover::after {
  width: 100%;
}
</style>
