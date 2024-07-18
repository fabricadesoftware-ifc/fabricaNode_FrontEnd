<script lang="ts" setup>
import { ListTitles, TextLogo, LoginButton } from '@/components';
import { useTemplateStore } from '@/stores';

const templateStore = useTemplateStore()
</script>


<template>
    <div class="header-desktop">
        <TextLogo />
        <div class="routers">
        <ul class="routers-desktop">
            <ListTitles class="router-link" v-for="(text, index) in templateStore.titles" :key="index" :title="text.text" :link="text.link" />
        </ul>
        </div>
        <LoginButton />
    </div>
</template>


<style scoped>
.routers{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.header-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14vh;
    padding: 15px 100px;
    background-color: white;
    z-index:4;
    width:100vw;
    position: fixed;
    top:0;
    left:0;
}

.routers-desktop {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60vh;
}

@media (max-width:1450px) {
    .routers-desktop {
        margin: 0px 70px;
    }
    .header-desktop {
        padding: 15px 130px;
    }
}

@media (max-width:1370px) {
    .routers-desktop {
        margin: 0px 50px;
    }

    .header-desktop {
        padding: 15px 110px;
    }
}
</style>
