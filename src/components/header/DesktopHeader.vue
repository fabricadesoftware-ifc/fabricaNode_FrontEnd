<script lang="ts" setup>
import { ref, onMounted, onUnmounted} from 'vue'
import { ListTitles, TextLogo, LoginButton } from '@/components'
import { useTemplateStore } from '@/stores'

const templateStore = useTemplateStore()
const navbar = ref(true)

if (window.location.pathname === '/graph') {
  navbar.value = false
}

function scrollFunction(): void {
  if (window.location.pathname !== '/') {
    navbar.value = true
  }
  if (window.location.pathname !== '/graph' && window.innerWidth > 1280) {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (scrollTop > 100) {
      navbar.value = false
    } else {
      navbar.value = true
    }
  }
}

onMounted(() => {
  window.addEventListener('load', scrollFunction)
  window.addEventListener('scroll', scrollFunction)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFunction)
})
</script>

<template>
  <div :class="navbar ? 'header-desktop' : 'header-desktop-active'">
    <TextLogo />
    <div class="routers">
      <ul class="routers-desktop">
        <ListTitles
          class="router-link"
          v-for="(text, index) in templateStore.titles"
          :key="index"
          :title="text.text"
          :link="text.link"
        />
      </ul>
    </div>
    <LoginButton />
  </div>
</template>

<style scoped>
.routers {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.header-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  padding: 15px 100px;
  background-color: white;
  z-index: 4;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.header-desktop-active {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  padding: 15px 100px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(99, 99, 99);
  z-index: 4;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.routers-desktop {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vh;
}

@media (max-width: 1450px) {
  .routers-desktop {
    margin: 0px 70px;
  }
  .header-desktop {
    padding: 15px 130px;
  }
}

@media (max-width: 1370px) {
  .routers-desktop {
    margin: 0px 50px;
  }

  .header-desktop {
    padding: 15px 110px;
  }
}
</style>
