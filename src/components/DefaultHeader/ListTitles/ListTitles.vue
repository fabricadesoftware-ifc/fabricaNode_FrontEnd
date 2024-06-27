<script lang="ts" setup>
defineProps({
    title: String
})
</script>

<template>
    <RouterLink class="router-link" to="/">
        <li>{{ title }}</li>
    </RouterLink>
</template>

<style scoped>
.routers-desktop li {
    font-family: "Montserrat", sans-serif;
    list-style: none;
    font-size: 18px;
    color: black;
}

.routers-mobile li {
    font-family: "Montserrat", sans-serif;
    list-style: none;
    font-size: 18px;
    color: black;
    display: block;
    text-align: center;
    width: 90vh;
    border-bottom: 1px solid rgb(83, 83, 83);
    padding: 5vh;
    color: black
}

.router-link {
    text-decoration: none;
}
@media (max-width:1000px) {
    .routers-desktop li {
        font-size: 16px;
    }
    
}
@media (max-width:820px) {
    .routers-desktop li {
        font-size: 14px;
    }     
}
</style>