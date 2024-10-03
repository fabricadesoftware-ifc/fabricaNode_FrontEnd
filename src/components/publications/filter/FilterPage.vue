<script lang="ts" setup>
import { FilterName, FilterOptions } from '@/components'
import { CategoryService, TypeService, AuthorService } from '@/services'
import { ref } from 'vue'
const categories = new CategoryService()
const types = new TypeService()
const authors = new AuthorService()
const optionsSelect = ref([])
const openFilters = ref(new Set())

function updateOption(option) {
  optionsSelect.value = option
}

const openMenu = (index) => {
  if (openFilters.value.has(index)) {
    openFilters.value.delete(index)
  } else {
    openFilters.value.add(index)
  }
}

const isOpen = (index) => {
  return openFilters.value.has(index)
}
const filters = [
  {
    name: 'Categoria',
    options: categories.getCategory()
  },
  {
    name: 'Tipo de publicação',
    options: types.getTypes()
  },
  {
    name: 'Período',
    options: ['hi']
  },
  {
    name: 'Autores',
    options: authors.getAuthos()
  },
  {
    name: 'ordenar',
    options: []
  }
]
</script>

<template>
  <h3>Filtros</h3>
  <div class="content-filters">
    <div class="filter" v-for="(filter, index) in filters" :key="index">
      <FilterName :titulo="filter.name" :open="isOpen(index)" @OpenMenu="openMenu(index)" />
      <FilterOptions
        :options="filter.options"
        :selects="optionsSelect"
        @updateOption="updateOption"
        v-if="isOpen(index)"
      />
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-track {
  background-color: #f4f4f4;
}
::-webkit-scrollbar {
  width: 6px;
  background: #848484;
}
::-webkit-scrollbar-thumb {
  background: #2c7a7a;
  border-radius: 10px;
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
  overflow-y: scroll;
}

.filter {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  padding: 16px 25px;
  border-bottom: 1px solid #c1c1c1;
  font-weight: 500;
  cursor: pointer;
}
</style>
