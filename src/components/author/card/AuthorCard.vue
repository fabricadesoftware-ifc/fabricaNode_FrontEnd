<script lang="ts" setup>
import { UtilityPublication, } from '@/components';
import { useAuthorStore } from '@/stores';
import { onMounted } from 'vue';

const authors = useAuthorStore();

function favoriteAuthor(author: any) {
    authors.favoritar(author);
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
                    <img :src="author.photo || '/src/assets/images/user.jpg'" alt="photo of author">
                </div>
                <div>
                    <h3> {{ author.name }}</h3>
                    <p v-if="author.email">{{ author.email }}</p>
                    <p v-if="author.biography" class="biography">{{ author.biography }}</p>
                    <div class="social-links">
                        <a v-if="author.linkedin" :href="author.linkedin" target="_blank" rel="noopener">LinkedIn</a>
                        <a v-if="author.github" :href="author.github" target="_blank" rel="noopener">GitHub</a>
                        <a v-if="author.instagram" :href="author.instagram" target="_blank" rel="noopener">Instagram</a>
                    </div>
                </div>
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
    object-fit: cover;
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

.biography {
    max-width: 480px;
    font-size: 13px;
    margin-top: 4px;
}

.social-links {
    display: flex;
    gap: 12px;
    margin-top: 4px;
}

.social-links a {
    font-size: 13px;
    color: #267A7A;
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
