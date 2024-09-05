<script lang="ts" setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
import BookmarkOutline from 'vue-material-design-icons/BookmarkOutline.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import { CategoryService } from '@/services'
import { usePublicationStore } from '@/stores'
import { ref } from 'vue'

const publications = usePublicationStore()
const categories = new CategoryService()
console.log(categories)
console.log(publications.entirePublications)
const open = ref(false)
</script>
<template>
  <section class="article-pages">
    <section class="container-articles">
      <section class="container-title">
        <div>
          <h1>Publicações</h1>
          <Magnify size="30" />
        </div>
        <div class="total-article">Total De Publicações: 400</div>
      </section>
      <section
        class="container-article"
        v-for="(publication, index) in publications.entirePublications"
        :key="index"
      >
        <div class="category-line"></div>
        <h1>
          <a href="">{{ publication.label }}</a>
        </h1>
        <div class="info-article">
          Autores:
          <div v-for="(author, index) in publication.authors" :key="index" class="text-inline">
            <a href="">{{ author.name + ' ' }}</a>
          </div>
        </div>
        <div class="info-article">
          Palavras-chave:
          <div
            v-for="(keyword, index) in publication.keywords"
            :key="index"
            class="text-inline text-underline"
          >
            <a href="">{{ keyword.key + ' ' + ',' }}</a>
          </div>
        </div>
        <div class="utility-article">
          <div class="favorite-article">
            <BookmarkOutline size="20" />
            <span> Favoritar</span>
          </div>
          <div>Artigos Relacionados</div>
        </div>
        <hr />
      </section>
    </section>
    <section class="container-filter">
      <h3>Filtros</h3>
      <div class="content-filters">
        <div class="filter" >
        
          <div class="filter-name">
            <div>Categoria</div>
            <div v-if="open">
              <ChevronDown class="filter-icon-open" @click="open = !open"/>
            </div>
            <div v-else>
              <ChevronDown class="filter-icon-close" @click="open = !open"/>
            </div>
          </div>
          <div class="filter-options" v-if="open">
            <div v-for="(category, index) in categories.getCategory()" :key="index">
              <input :id="index" type="checkbox" > 
              <label :for="index"> {{category.name}}</label>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}

.article-pages {
  height: auto;
  margin-top: 22vh;
  display: flex;
}

.filter-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-options{
  overflow-y:scroll;
  height: 200px;
  margin-top: 15px;
}

::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #848484;
}
::-webkit-scrollbar-thumb {
    background: #2C7A7A;
    border-radius: 10px;
}

.filter-options div{
  display: flex;
  margin: 18px 0;
  font-weight: 450;
}

.filter-options label{
  margin-left: 8px;
  cursor: pointer;
  user-select: none;
}

.filter-options input{
  color: #848484;
  border: 1px solid #848484;
  appearance: none;
  height: 17px;
  width: 17px;
  border-radius: 4px;
  cursor: pointer;
}

.filter-options input:checked{
  background-color: #2C7A7A;
}

.container-articles {
  width: 80vw;
  padding: 0px 100px;
}

.container-filter {
  width: 20vw;
  height: 100vh;
  /* background-color: #a7a7a7; */
  position: sticky;
  top: 150px;
}

.container-title div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.container-title {
  margin-bottom: 46px;
}

.category-line {
  width: 60px;
  height: 6px;
  background-color: #0029b9;
  border-radius: 50px;
}

h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
}

.total-article {
  font-size: 16px;
  color: #949494;
  font-weight: 600;
}

.container-article h1 {
  font-size: 16px;
  margin: 14px 0 14px 0;
}

.info-article {
  color: #464343;
  font-weight: 400;
  display: block;
  margin-bottom: 14px;
}

.text-inline {
  display: inline;
}

.favorite-article {
  display: flex;
}

hr {
  width: 100%;
  height: 1px;
  background-color: #c1c1c1;
  margin: 14px 0 14px 0;
}

.utility-article {
  display: flex;
  gap: 27px;
}

h1 a {
  color: black;
}

a {
  color: #464343;
}

a:hover {
  text-decoration: underline;
  transition: 3s;
}

.text-underline {
  text-decoration: underline;
}

h3 {
  font-size: 20px;
  margin: 0 0 25px 25px;
  font-weight: 600;
}

.content-filters {
  height: calc(100% - 50px);
  width: 100%;
  border-top: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
}

.filter {
  display: flex;
  /* align-items: center; */
  width: 100%;
  flex-direction: column;
  /* justify-content: space-between; */
  font-size: 16px;
  padding: 16px 25px;
  border-bottom: 1px solid #c1c1c1;
  font-weight: 500;
  cursor: pointer;
}

.filter-icon-open {
  display: flex;
  transform: rotate(180deg);
}

.filter-icon-close {
  display: flex;
}
</style>
