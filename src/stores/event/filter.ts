
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { usePublicationStore } from '@/stores'


export const useFilterStore = defineStore('filter', () => {
 // chama a store corretamente
 const publications = usePublicationStore()


 // cada filtro tem sua própria lista de opções selecionadas
 const optionsSelect = ref<Record<number, any[]>>({})


 function updateOption(option: any[], index: number) {
   optionsSelect.value[index] = option
 }


 const filtro = computed(() => {
   function FilterSort(publications: any, optionsSelect: any) {
     let FilteredPublications = publications.entirePublications


     // Filtrar por categoria
     if (optionsSelect[0] && optionsSelect[0].length !== 0) {
       const newFiltredCategories = new Set(optionsSelect[0])
       const arrayFiltrada = FilteredPublications.filter((publication: any) =>
         publication.categories.some((element: any) => newFiltredCategories.has(element.id))
       )
       console.log(arrayFiltrada)
       FilteredPublications = arrayFiltrada
     }




 // === 1: Tipo de publicação ===
 if (optionsSelect[1] && optionsSelect[1].length !== 0) {
   const newFiltredTypes = new Set(optionsSelect[1])
   FilteredPublications = FilteredPublications.filter((publication: any) =>
     newFiltredTypes.has(publication.type.id)
   )
 }


 // === 2: Período (minDate, maxDate) ===
 if (optionsSelect[2] && optionsSelect[2].length === 2) {
   const [minDate, maxDate] = optionsSelect[2]
   FilteredPublications = FilteredPublications.filter((publication: any) => {
     const pubDate = new Date(publication.date)
     return pubDate >= new Date(minDate) && pubDate <= new Date(maxDate)
   })
 }


 // === 3: Autores ===
 if (optionsSelect[3] && optionsSelect[3].length !== 0) {
   const newFiltredAuthors = new Set(optionsSelect[3])
   FilteredPublications = FilteredPublications.filter((publication: any) =>
     publication.authors.some((element: any) =>
       newFiltredAuthors.has(element.id)
     )
   )
 }


 // === 4: Ordenação ===
 if (optionsSelect[4] && optionsSelect[4].length !== 0) {
   const sortOption = optionsSelect[4][0]
   switch (sortOption) {
     case 'mais-recentes':
       FilteredPublications.sort(
         (a: any, b: any) =>
           new Date(b.date).getTime() - new Date(a.date).getTime()
       )
       break
     case 'mais-antigos':
       FilteredPublications.sort(
         (a: any, b: any) =>
           new Date(a.date).getTime() - new Date(b.date).getTime()
       )
       break
     case 'az':
       FilteredPublications.sort((a: any, b: any) =>
         a.label.localeCompare(b.label)
       )
       break
     case 'za':
       FilteredPublications.sort((a: any, b: any) =>
         b.label.localeCompare(a.label)
       )
       break
     case 'curtidas':
       FilteredPublications.sort((a: any, b: any) => b.likes - a.likes)
       break
     case 'favoritos':
       const seusFavoritos = [1, 2, 3] // substitua com dados reais do usuário
       FilteredPublications = FilteredPublications.filter((p: any) =>
         seusFavoritos.includes(p.id)
       )
       break
   }}


     return FilteredPublications
   }


   return FilterSort(publications, optionsSelect.value)
 })


 return {
   optionsSelect,
   updateOption,
   filtro
 }
})
