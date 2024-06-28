<script lang="ts" setup>
import { ListTitles, TextLogo, LoginButton } from '@/components';
import { titles } from '@/stores';
</script>


<template>
    <div class="header-desktop">
        <TextLogo />
        <ul class="routers-desktop">
            <ListTitles class="router-link" v-for="(text, index) in titles" :key="index" :title="text.text" :link="text.link" />
        </ul>
        <LoginButton />
    </div>
</template>


<style scoped>
.header-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}

.routers-desktop {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vh;
    margin: 0px 150px;
}

@media (max-width:1200px) {
    .routers-desktop {
        margin: 0px 100px;
    }
}

@media (max-width:1050px) {
    .routers-desktop {
        margin: 0px 50px;
    }

    .header-desktop {
        padding: 15px 35px;
    }
}
</style>
