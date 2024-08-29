import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  //   const filtredArray = ['livro']
  //   const publication = { category: 'livro' }
  //   const num=3
  //   const filtredCategories = ['livro', 'artigo']
  //   const filtredDates = [1,2,3,4,5,6,7]
  //   function filterByCategories() {
  //     console.log(filtredCategories.include(publication.category))
  //     return filtredCategories.include(publication.category)
  //   }
  //   function filterByDate(publication, minDate, maxDate) {
  //     return publication.date >= minDate && publication.date <= maxDate
  //   }
  //   function filtredPublications() {
  //     filtredArray = usePublicationStore.entirePublications.filter((publication) => {
  //       filterByCategories(publication, filtredCategories)
  //       filterByDate(publication, minDate, maxDate)
  //     })
  //   }
})

const publications = {
  id: 1,
  label: 'Análise de Algoritmos Genéticos',
  link: 'http://copec.eu/congresses/intertech2014/proc/works/101.pdf',
  authors: ['1'],
  keywords: ['1', '2', '3'],
  categories: ['livro', 'artigo'],
  resume: 'Este artigo explora o uso de algoritmos genéticos na otimização de funções complexas.',
  type: '1',
  favorite: false,
  date: '02-02-22'
}

const publication = { category: 'livro' }
const filtredCategories = ['livro', 'artigo']

function filterByCategories(publicacao, filtredCategories) {
  const newFiltredCategories = new Set(filtredCategories)
  if (publicacao.categories.some((element) => newFiltredCategories.has(element))) {
    console.log(publicacao)
  }
  return publicacao
}
function filterByDate(publication, minDate, maxDate) {
  if (publication.date >= minDate && publication.date <= maxDate) {
    console.log(publication)
    return publication
  }
}
function filterByType(publicacao, filtredType) {
  if (filtredType == publicacao.type) {
    console.log(publicacao)
    return publication
  }
}
function filterByAuthors(publicacao, filtredAuthors) {
  const newFiltredAuthors = new Set(filtredAuthors)
  if (publicacao.authors.some((element) => newFiltredAuthors.has(element))) {
    console.log(publicacao)
  }
}
const publicacao = [
  { nome: 'Livro', data: 3 },
  { nome: 'Artigo', data: 2 },
  { nome: 'Zcdrd', data: 4 }
]
function sortByRecentDate() {
  publicacao.sort((a, b) => a.data - b.data)
  console.log(publicacao)
}
function sortByOldenDate() {
  publicacao.sort((a, b) => b.data - a.data)
  console.log(publicacao)
}
function sortByAz() {
  publicacao.sort((a, b) => a.nome.localeCompare(b.nome))
  console.log(publicacao)
}
function sortByZa() {
  publicacao.sort((a, b) => a.nome.localeCompare(b.nome))
  console.log(publicacao)
}
function sortByCurtidas() {
  publicacao.sort((a, b) => a.curtidas.localeCompare(b.curtidas))
  console.log(publicacao)
}
function sortByFavorites(publicacao) {
  if(seusFavoritos.includes(publicacao.name)){
    console.log(publicacao)
}
}

filterByCategories(publications, filtredCategories)
filterByDate(publications, '02-02-21', '02-02-24')
filterByType(publications, '1')
filterByAuthors(publications, '1')
sortByRecentDate()
sortByOldenDate() 
sortByDate()
sortByAz()
sortByZa()
sortByCurtidas()
sortByFavorites(publications)
