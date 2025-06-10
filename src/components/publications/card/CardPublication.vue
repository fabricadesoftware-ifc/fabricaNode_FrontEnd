
<script lang="ts" setup>
import { InfoPublication, UtilityPublication } from '@/components';
import { usePublicationStore } from '@/stores';
import { useFilterStore } from '@/stores';


const publications = usePublicationStore();
const filterStore = useFilterStore()


function favorite(publication: any) {
 publication.favorite = !publication.favorite;
}
const filtredCategories = [1, 10]; // use números aqui


function filtered(publicacoes: any[]) {
 const newFiltredCategories = new Set(filtredCategories);
  return publicacoes.filter((publication: any) =>
   publication.categories.some((categoria: any) =>
     newFiltredCategories.has(categoria.id)
   )
 );
}






</script>


<template>
 <div>
   <section
     class="container-article"
     v-for="(publication, index) in filterStore.filtro"
     :key="index"
   >
     <div class="category-line"></div>
     <h1>
       <a href="">{{ publication.label }}</a>
     </h1>
     <InfoPublication :authors="publication.authors" :keywords="publication.keywords" />
     <div class="utility-article">
     <UtilityPublication :data="publication" @favorite="favorite" />
     <div><a href="">Artigos Relacionados</a></div>
     </div>
     <hr />
   </section>
 </div>
</template>


<style scoped>
.container-article h1 {
 font-size: 16px;
 margin: 14px 0 14px 0;
}


.utility-article {
 display: flex;
 gap: 27px;
}


.utility-article a {
 color: black;
}


a:hover {
 text-decoration: underline;
 transition: 3s;
}


h1 {
 font-size: 36px;
 font-weight: 600;
 margin-bottom: 10px;
}
.container-article {
 cursor: pointer;
}


.category-line {
 width: 60px;
 height: 6px;
 background-color: #0029b9;
 border-radius: 50px;
}


.container-article:hover .category-line {
 width: 100px;
 transition: 0.5s;
}


.container-article:hover {
 transform: scale(1.01);
 transition: 0.2s;
}


hr {
 width: 100%;
 height: 1px;
 background-color: #c1c1c1;
 margin: 14px 0 14px 0;
}


h1 a {
 color: black;
}
</style>
