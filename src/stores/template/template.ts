import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { CategoryService, TypeService, AuthorService } from '@/services'

export const useTemplateStore = defineStore('template', () => {
  const tooltipOpacity = ref(0)
  const menuActive = ref(false)
  const navbar = reactive({ nav: true })
  const openFilters = ref(new Set())
  const categories = new CategoryService()
  const types = new TypeService()
  const authors = new AuthorService()

  const titles = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Publicações',
      link: '/article'
    },
    {
      text: 'Autores',
      link: '/author'
    },
    {
      text: 'Sobre',
      link: '/about'
    }
  ]

  const homeTitles = [
    {
      firstTitle: 'CONECTANDO',
      secondTitle: 'CONHECIMENTO',
      thirdTitle: 'ACADÊMICO',
      subtitle:
        'Publicações acadêmicas conectadas de forma intuitiva, ultilizando redes especializadas, facilitando o acesso ao conhecimento.'
    }
  ]

  const footerTitles = [
    {
      linksTitle: 'LINKS RÁPIDOS',
      contactTitle: 'CONTATO'
    }
  ]

  const footerContact = [
    {
      text: 'BR-280 - Colégio Agrícola, Araquari - SC, 89245-000'
    },
    {
      text: 'fabrica@ifc.edu.br'
    },
    {
      text: '(47) 3803-7200'
    }
  ]

  const footerMidia = [
    {
      img: 'github',
      link: 'https://github.com/fabricadesoftware-ifc'
    },
    {
      img: 'instagram',
      link: 'https://www.instagram.com/fabricadesoftware.ifc/'
    },
    {
      img: 'linked-in',
      link: 'https://br.linkedin.com/company/fabricadesoftware-if'
    },
    {
      img: 'twiter',
      link: 'https://x.com/FabSoftwareIFC'
    }
  ]

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

  return {
    tooltipOpacity,
    titles,
    menuActive,
    homeTitles,
    footerTitles,
    footerContact,
    footerMidia,
    navbar,
    openMenu, 
    isOpen,
    filters
  }
})
