<script lang="ts" setup></script>
<template>
  <div class="links">
    <div>
      <h1 class="footer-titles">LINKS RÁPIDOS</h1>
      <ul>
        <li class="footer-li">HOME</li>
        <li class="footer-li">PUBLICAÇÕES</li>
        <li class="footer-li">AUTORES</li>
        <li class="footer-li">SOBRE</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.links {
  display: flex;
  min-height: 120px;
  width: 26.66vw;
}
.footer-titles {
  font-family: "Montserrat", sans-serif;
  color: #ea6e18;
  font-size: 20px;
  font-weight: 550;
}
.footer-li {
  color: white;
  font-family: "Montserrat", sans-serif;
  list-style: none;
  font-weight: 450;
  margin: 5px;
}

@media (max-width: 900px) {
  .links {
    min-height: 100px;
  }
}
</style>
