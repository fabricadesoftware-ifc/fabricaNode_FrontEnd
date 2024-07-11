import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', () => {
  const tooltipOpacity = ref(0)
  const menuActive = ref(false)

  const titles = [
    {
      text: 'HOME',
      link: '/'
    },
    {
      text: 'PUBLICAÇÕES',
      link: '/article'
    },
    {
      text: 'AUTORES',
      link: '/author'
    },
    {
      text: 'SOBRE',
      link: '/about'
    }
  ]

  const homeTitles = [
    {
      firstTitle: 'conectando',
      secondTitle: 'CONHECIMENTO',
      thirdTitle: 'acadêmico',
      subtitle:
        'publicações acadêmicas conectadas de forma intuitiva, ultilizando redes especializadas, facilitando o acesso ao conhecimento.'
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

  return {
    tooltipOpacity,
    titles,
    menuActive,
    homeTitles,
    footerTitles,
    footerContact,
    footerMidia
  }
})
