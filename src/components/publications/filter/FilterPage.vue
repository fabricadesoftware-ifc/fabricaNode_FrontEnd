<script lang="ts" setup>
import { ref } from 'vue';
import { FilterName, FilterOptions } from '@/components'
import { useTemplateStore, useFilterStore } from '@/stores';
defineProps({
 filterArray: {
   type: Array,
   required: true,
 },
});


const templateStore = useTemplateStore();
const FilterStore = useFilterStore();
</script>


<template>
 <section>
   <h3>Filtros</h3>
   <!-- <p>{{ FilterStore.optionsSelect }}</p> -->
   <div class="content-filters">
     <div class="filter" v-for="(filter, index) in filterArray" :key="index">
       <FilterName
         :titulo="filter.name"
         :open="templateStore.isOpen(index)"
         @OpenMenu="templateStore.openMenu(index)"
       />
       <FilterOptions
         :options="filter.options"
         :selects="FilterStore.optionsSelect[index] || []"
         @updateOption="(option) => FilterStore.updateOption(option, index)"
         v-if="templateStore.isOpen(index)"
       />
       <!-- <p>{{ FilterStore.optionsSelect[index] }}</p> -->
     </div>
   </div>
 </section>
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
 height: 750px;
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


