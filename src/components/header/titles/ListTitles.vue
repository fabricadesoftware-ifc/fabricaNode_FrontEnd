<script lang="ts" setup>
defineProps({
    title: String,
    link: String
});
</script>

<template>
    <RouterLink class="router-link" :to="link">
        <li>{{ title }}</li>
    </RouterLink>
</template>

<style scoped>
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
</style>
