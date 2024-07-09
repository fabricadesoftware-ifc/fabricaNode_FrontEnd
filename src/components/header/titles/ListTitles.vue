<script lang="ts" setup>
defineProps({
  title: String,
  link: String
})
</script>

<template>
  <RouterLink class="router-link" :to="link">
    <li>{{ title }}</li>
  </RouterLink>
</template>

<style scoped>
.routers-desktop li {
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  font-size: 18px;
  color: black;
  position: relative;
}

.routers-mobile li {
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  font-size: 18px;
  color: black;
  display: block;
  text-align: center;
  width: 90vh;
  border-bottom: 1px solid rgb(83, 83, 83);
  padding: 5vh;
  color: black;
}

.router-link {
  text-decoration: none;
}
li::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  position: absolute;
  transition: width 0.5s ease;
}

li:hover::after {
  width: 100%;
}

.router-link:nth-child(1) li::after {
  background-color: #ea6e18;
}

.router-link:nth-child(2) li::after {
  background-color: #267a7a;
}

.router-link:nth-child(3) li::after {
  background-color: #da4e50;
}

.router-link:nth-child(4) li::after {
  background-color: #4a4beb;
}
@media (max-width: 1000px) {
  .routers-desktop li {
    font-size: 16px;
  }
}
@media (max-width: 820px) {
  .routers-desktop li {
    font-size: 14px;
  }
}
</style>
