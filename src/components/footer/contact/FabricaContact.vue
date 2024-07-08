<script lang="ts" setup></script>
<template>
  <div class="contato">
    <div>
      <h1 class="footer-titles">CONTATO</h1>
      <ul>
        <li class="footer-li">BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</li>
        <li class="footer-li">fabrica@ifc.edu.br</li>
        <li class="footer-li">(47) 3803-7200</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.contato {
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
  .contato {
    min-height: 100px;
  }
}
</style>
