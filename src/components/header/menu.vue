<script setup>
import { useScreen } from '@/composables';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

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
                <RouterLink class="router-link" to="/">
                    <li>HOME</li>
                </RouterLink>
                <RouterLink class="router-link" to="/article">
                    <li>PUBLICAÇÕES</li>
                </RouterLink>
                <RouterLink class="router-link" to="/author">
                    <li>AUTORES</li>
                </RouterLink>
                <RouterLink class="router-link" to="/about">
                    <li>SOBRE</li>
                </RouterLink>
            </ul>
            <RouterLink class="router-link" to="/login">
                <button class="login-button">ENTRAR</button>
            </RouterLink>

        </div>
        <div class="header-mobile" v-else>

            <div id="logo">
                <h1 id="logoFabrica">FABRICA</h1>
                <h1 id="logoNeeds">NODE</h1>
            </div>
            <div class="menu-icon">
                <img @click="menuActive = true" src="@/assets/menu-aberto.png" width="50px">
            </div>
        </div>
        <div class="menu-active" v-if="menuActive">
            <div class="menu-mobile">
                <div class="menu-icon">
                    <img class="close" @click="menuActive = false" src="@/assets/x.png" width="30px">
                </div>
                <ul class="routers-mobile">
                    <li>HOME</li>
                    <li>PUBLICAÇÕES</li>
                    <li>AUTORES</li>
                    <li>SOBRE</li>
                </ul>
                <div id="logo">
                    <h1 id="logoFabrica">FABRICA</h1>
                    <h1 id="logoNeeds">NODE</h1>
                </div>
            </div>
        </div>
    </header>
</template>
<style setup>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
a{
    text-decoration: none;
}
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
    align-self: center;
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
    color:black;
}

.login-button {
    font-family: "Montserrat", sans-serif;
    color: white;
    background-color: #4A4BEB;
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
}

.menu-active {
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
}

.menu-mobile {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.routers-mobile {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 5vh 2vh;
    background-color: white;
    flex-direction: column;


}
.router-link{
    text-decoration: none;
}
.routers-mobile li {
    display: block;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid rgb(83, 83, 83);
    padding: 5vh;
    color:black
}

.close {
    margin: 20px;
    display: block;
    align-self: end;
}
</style>