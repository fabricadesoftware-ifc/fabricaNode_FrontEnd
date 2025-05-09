<script lang="ts" setup>
import {  TitlePage, FilterPage, AuthorCard } from '@/components';
import { useTemplateStore} from '@/stores';

const templateStore = useTemplateStore();

</script>

<template>
    <section class="author-pages">
        <section class="container-authors">
            <TitlePage title="Autores" />
            <AuthorCard/>
        </section>
        <section class="container-filter">
            <FilterPage :filter-array="templateStore.filterAuthor" />
        </section>
    </section>
</template>

<style scoped>
.author-pages {
    height: auto;
    margin-top: 22vh;
    display: flex;
}

.container-authors {
    width: 80vw;
    padding: 0px 100px;
}

.container-filter {
    width: 20vw;
    height: 800px;
    position: sticky;
    top: 150px;
}


</style>
