<template>
    <div class="titles-container">
        <h1 class="title-conecting">conectando</h1>
        <h1 class="title-knowledge">CONHECIMENTO</h1>
        <div class="hover-knowledge"></div>
        <h1 class="title-academic">acadêmico</h1>
    </div>

</template>

<style scoped>
.titles-container {
    display: grid;
    width: min-content;
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
</style>