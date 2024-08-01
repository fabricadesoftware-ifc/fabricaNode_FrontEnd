<script lang="ts" setup>
import { ListTitles, TextLogo } from '@/components';
import { useTemplateStore } from '@/stores';

const templateStore = useTemplateStore();
</script>

<template>
    <div>
        <div class="header-mobile">
            <TextLogo />
            <div class="menu-icon">
                <img @click="templateStore.menuActive = !templateStore.menuActive" src="@/assets/images/menu-aberto.png" class="img-menu-icon">
            </div>
        </div>
        <div class="menu-active" v-if="templateStore.menuActive">
            <div class="menu-mobile">
                <div class="menu-icon">
                    <img class="close" @click="templateStore.menuActive = !templateStore.menuActive" src="@/assets/images/x.png" width="30px">
                </div>
                <ul class="routers-mobile">
                    <ListTitles class="router-link"  v-for="(text, index) in templateStore.titles" :key="index"
                        :title="text.text" :link="text.link" />
                </ul>
                <TextLogo />
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: fixed;
    padding: 20px;
    background-color: white;
    border-bottom: 1px solid rgb(83, 83, 83);
}

.menu-icon {
    display: flex;
    justify-content: right;

}

.img-menu-icon{
        width:30px;
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

.router-link {
    text-decoration: none;
}

.routers-mobile li {
    display: block;
    text-align: center;
    width: 100vh;
    border-bottom: 1px solid rgb(83, 83, 83);
    padding: 5vh;
    color: black
}

.close {
    margin: 20px;
    display: block;
    align-self: end;
}
</style>