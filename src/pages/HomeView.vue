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
                <h1 class="title-initial">CONECTANDO CONHECIMENTO ACADÊMICO</h1>
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

.title-initial {
    font-family: "Montserrat", sans-serif;
    font-size: 42px;
    font-weight: 400;
    width: min-content;
}

.title-description {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 400;
    width: 350px;
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
    background-color: #4A4BEB;
    transition: 0.5s;
}
</style>