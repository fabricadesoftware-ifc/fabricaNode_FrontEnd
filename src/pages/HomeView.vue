<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { DefaultHeader } from '@/components';

const router = useRouter();
</script>
<template>
    <div>
        <DefaultHeader />
        <div class="initial-page">
            <div class="title">
                <div class="titles-h1">
                <h1 class="title-conecting">conectando</h1>
                <h1 class="title-knowledge">CONHECIMENTO</h1>
                <div class="hover-knowledge"></div>
                <h1 class="title-academic">acadêmico</h1>
            </div>
                <h2 class="title-description">publicações acadêmicas conectadas de forma intuitiva, ultilizando redes especializadas, facilitando o acesso ao conhecimento.</h2>
                <button class="button-see-graph" @click="router.push({name: 'graph'})">
                    Ver Grafo
                </button>
            </div>
            <div class="grafo-img">
                <img src="@/assets/grafo.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.title, .grafo-img{
    width: 50vw;
}
.title{
    padding-left: 170px;
}
.titles-h1{
    display: grid;
    width: min-content;
}
.grafo-img{
    display: flex;
    align-items: center;
    justify-content: center;
}
.grafo-img > img{
    width: 40vw;
}
.initial-page {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 90vh;
    background-color: #fff;
    background-image: -webkit-linear-gradient(-22deg, #fff 50%, #22262f 50%);
}

.title-conecting {
    z-index: 2;
    font-family: "Montserrat", sans-serif;
    font-size: 38px;
    font-weight: 400;
    position: relative;
}
.hover-knowledge {
    z-index: 1;
    display: block;
    background-color: #4a4aeb38;
    width: 100%;
    height: 18px;
    margin-top: -26px;
}
.title-knowledge {
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 400;
}

.title-academic {
    display: block;
    justify-self: end;
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    font-weight: 400;
    width: max-content;
}
.title-description {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 400;
    width: 460px;
    color: #EA6E18;
    margin: 20px 0px;
}


.button-see-graph {
    width: max-content;
    border-radius: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    background-color: #267A7A;
    padding: 15px 60px;
    color: white;
    margin: 30px 0px;
}
.button-see-graph:hover {
    background-color: #EA6E18;
    transition: 0.5s;
}
</style>