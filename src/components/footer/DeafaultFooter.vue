<script lang="ts" setup>
</script>
<template>
    <footer>
        <div class="container">
            <div class="img-logo-fabrica">
                <img src="@/assets/logo-fabrica-de-software.png">
            </div>
            <div class="links">
                <div>
            <h1 class="footer-titles">LINKS RÁPIDOS</h1>    
                <ul>
                    <li class="footer-li">HOME</li>
                    <li class="footer-li">PUBLICAÇÕES</li>
                    <li class="footer-li">AUTORES</li>
                    <li class="footer-li">SOBRE</li>
                </ul>
            </div></div>
            <div class="contato">
                <div>
            <h1 class="footer-titles">CONTATO</h1>       
                <ul>
                    <li class="footer-li">BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</li>
                    <li class="footer-li">fabrica@ifc.edu.br</li>
                    <li class="footer-li">(47) 3803-7200</li>
                </ul>
            </div></div>
        </div>
        <hr>
        <div class="container-midia">
            <a href="https://github.com/fabricadesoftware-ifc"><img src="@/assets/logo-github.png" width="55px"></a>
            <a href="https://www.instagram.com/fabricadesoftware.ifc/" ><img src="@/assets/logo-instagram.png" width="55px"></a>
            <a href="https://br.linkedin.com/company/fabricadesoftware-ifc" ><img src="@/assets/logo-linked-in.png" width="55px"></a>
            <a href="https://x.com/FabSoftwareIFC"><img src="@/assets/logo-twiter.png" width="55px"></a>
        </div>
    </footer>
</template>
<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #22262F;
    height: 70vh;
}
.container{
    display: flex;
    align-items: center;
    width: 80vw;
    justify-content: space-between;
    margin:100px;
}
.img-logo-fabrica, .links, .contato{
    display: flex;
    min-height: 120px;
    width: 26.66vw;
}
.img-logo-fabrica img{
    width: 200px;
  }  
.footer-titles{
    font-family: "Montserrat", sans-serif;
    color:#EA6E18;
    font-size: 20px;
    font-weight: 550;
}
.footer-li{
    color:white;
    font-family: "Montserrat", sans-serif;
    list-style: none;
    font-weight: 450;
    margin:5px;
}
hr{
    height: 1px;
    width: 80vw;
    background-color: white;
}
.container-midia img{
   margin: 20px 10px;
}

@media (max-width:900px) {
  .img-logo-fabrica img{
    width: 150px;
  }  
  .img-logo-fabrica, .links, .contato{
    min-height: 100px;
}
}
</style>
