<script setup lang="ts">
import '@passageidentity/passage-elements/passage-auth';
import MenuView from '@/components/DefaultHeader/DefaultMenu.vue'
</script>

<template>
  <div>
  <MenuView/>
    <h1>Login</h1>
    <div class="authContainer">
      <passage-auth
        app-id="8hvbdcIOsej2p0nx6WXNa3F7"
      ></passage-auth>
    </div>
  </div>


</template>


<style scoped>

</style>