import { defineStore } from 'pinia'

import type { IPublication } from '@/interfaces'
import { usePublicationStore } from '@/stores'

export const useFilterStore = defineStore('filter', () => {
  const filter = ref<IPublication[]>([])
  const usePublicationStore = usePublicationStore()
  const allPublicationFilter = []
  for (item in usePublicationStore.entirePublications) {
    console.log(item)
    allPublicationFilter.value.push(item)
  }

  return {
    filter
  }

  filtredArray = []
  const filtredCategories = [livro, artigo]
  function filterByCategories(publication, filtredCategories){
        return (
          filtredCategories.include(publication.category)
        )
  }
  function filterByDate(publication, minDate, maxDate) {
    return publication.date >= minDate && publication.date <= maxDate;
  }
  function filtredPublications() {
    filtredArray = usePublicationStore.entirePublications.filter((publication) => {
        filterByCategories(publication, filtredCategories)
        filterByDate(publication, minDate, maxDate)
      })
  }
})
