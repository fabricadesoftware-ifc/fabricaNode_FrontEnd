<script setup>
import { useScreen } from '@/composables';
import { ref } from 'vue';

const { isMobile } = useScreen()
const menuActive = ref(false)
</script>
<template>
    <header>
        <div class="header-desktop" v-if="!isMobile">

            <div id="logo">
                <h1 id="logoFabrica">FABRICA</h1>
                <h1 id="logoNeeds">NODE</h1>
            </div>
            <ul class="routers-desktop">
                <li>HOME</li>
                <li>PUBLICAÇÕES</li>
                <li>AUTORES</li>
                <li>SOBRE</li>
            </ul>
            <button>ENTRAR</button>

        </div>
        <div class="header-mobile" v-else>

            <div id="logo">
                <h1 id="logoFabrica">FABRICA</h1>
                <h1 id="logoNeeds">NODE</h1>
            </div>
            <div class="menu-icon">
                <img @click="menuActive = true" src="@/assets/menu-aberto.png" width="50px">
            </div>
            <div class="menu-active" v-if="menuActive">
                <div class="menu-mobile">
                    <div class="menu-icon">
                        <img @click="menuActive = false" src="@/assets/x.png" width="30px">
                    </div>
                    <ul class="routers-mobile">
                        <li>HOME</li>
                        <li>PUBLICAÇÕES</li>
                        <li>AUTORES</li>
                        <li>SOBRE</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.header-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}
.header-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}
.menu-icon {
    display: flex;
    justify-content: right;
}

#logo {
    display: flex;
    width: min-content;
}

h1 {
    font-family: "Montserrat", sans-serif;
}

#logoFabrica {
    font-weight: 300;
}

#logoNeeds {
    color: #267A7A;
}

.routers-desktop {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    padding: 0px 50px;
}

li {
    font-family: "Montserrat", sans-serif;
    list-style: none;
    font-size: 18px;
}

button {
    font-family: "Montserrat", sans-serif;
    width: 10%;
    color: white;
    background-color: #4A4BEB;
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
}
.menu-active{
    position: fixed;
}
.menu-mobile{
    display: flex;
    flex-direction: column;
    align-items: center ;
}
.routers-mobile{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}
</style>