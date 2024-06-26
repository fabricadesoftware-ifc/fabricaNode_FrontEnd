<script lang="ts" setup>
import { ListTitles, TextLogo, LoginButton } from '@/components';
import { titles } from '@/stores';
</script>

<template>
    <div class="header-desktop">
        <TextLogo />
        <ul class="routers-desktop">
            <ListTitles class="router-link" to="/" v-for="(text, index) in titles" :key="index" :title="text.text" />
        </ul>
        <LoginButton />
    </div>
</template>

<style scoped>
.header-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}

.routers-desktop {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    padding: 0px 50px;
}
</style>