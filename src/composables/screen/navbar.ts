import { onMounted, onUnmounted, ref } from 'vue';
import { useTemplateStore } from '@/stores';

export function useNavbar() {
    const templateStore = useTemplateStore()
    if (window.location.pathname === '/graph') {
        templateStore.navbar.nav = false
      }
      
      function scrollFunction(): void {
        if (window.location.pathname !== '/') {
            templateStore.navbar.nav = true
        }
        if (window.location.pathname !== '/graph' && window.innerWidth > 1280) {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      
          if (scrollTop > 100) {
            templateStore.navbar.nav = false
          } else {
            templateStore.navbar.nav = true
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

};