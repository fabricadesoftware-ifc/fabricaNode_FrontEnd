<script lang="ts" setup>
import { UtilityPublication, } from '@/components';
import { useAuthorStore } from '@/stores';
import { onMounted } from 'vue';

const authors = useAuthorStore();

function favoriteAuthor(author: any) {
    author.favorite = !author.favorite;
}

onMounted(() => {
    authors.populateAuthors();
});
</script>

<template>
    <section v-for="(author, index) in authors.authors" :key="index">
        <div class="card ">
            <div class="photo-info">
                <div>
                    <img src="/src/assets/images/user.jpg" alt="photo of author">
                </div>
                <div>
                    <h3> {{ author.name }}</h3>
                    <p>{{ author.email }}</p>
                </div>
            </div>
            <div class="name-institution">
                <p>Instituição: IFC Araquari</p>
            </div>
            <div class="utility">
                <UtilityPublication :data="author" @favorite="favoriteAuthor" />
            </div>
        </div>
        <hr />
    </section>
</template>

<style scoped>

img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    border: 5px solid #0029B9;
}

section .card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

h3 {
    font-size: 16;
    font-weight: 600;
    margin-bottom: 4px;
}

.photo-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

p {
    color: #464343;
}

.name-institution {
    display: flex;
    align-items: center;
}

hr {
    flex-basis: 100%;
    width: 100%;
    height: 1px;
    background-color: #c1c1c1;
    margin: 14px 0;
    border: none;
}

.utility {
    display: flex;
    align-items: center;
}

.card:hover {
    transform: scale(1.01);
    transition: 0.25s;
}

.card:hover img {
    border: 2px solid #0029B9;
    transition: 0.2s;
}
</style>
