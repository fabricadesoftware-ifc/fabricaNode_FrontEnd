<script lang="ts" setup>
import { Magnify } from '@/components/icons';
import { ref } from 'vue';
const search = ref(false)
</script>
<template>
  <Magnify size="30" @click="search = !search" class="search-icon" />

  <Transition name="input-search-animation">
    <div v-if="search" class="input-search">
      <input type="text" name="" id="" placeholder="Pesquise aqui" />
    </div>
  </Transition>
</template>

<style scoped>

.search-icon{
  cursor: pointer;
}

.input-search{
  width: 100%;
}

.input-search input{
  border-bottom: 1px solid black;
  outline: none;
  font-size: 20px;
  width: 70%;
}

.input-search-animation-enter-active {
  animation: input 1s;
}

.input-search-animation-leave-to {
  animation: input-disappear 1s;
}

@keyframes input{
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
}

@keyframes input-disappear{
  0%{
    width: 100%;
  }
  100% {
    width: 0;
  }
}

.input-search input::placeholder{
 color: #464343;
}</style>
