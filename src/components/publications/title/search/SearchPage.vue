<script lang="ts" setup>
import { ref } from 'vue';

import { Magnify } from '@/components/icons';

const search = ref(false);
</script>
<template>
  <div>
    <Magnify size="30" @click="search = !search" class="search-icon" />

    <Transition name="input-search-animation">
      <div v-if="search" class="input-search">
        <input type="text" name="" id="" placeholder="Pesquise aqui" />
      </div>
    </Transition>
  </div>
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
