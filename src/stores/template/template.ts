import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template', () => {

    const tooltipOpacity = ref(0);
    const menuActive = ref(false);

    const titles = [{
        text: "HOME",
        link: "/"
    },
    {
        text: "PUBLICAÇÕES",
        link: "/article"
    },
    {
        text: "AUTORES",
        link: "/author"
    },
    {
        text: "SOBRE",
        link: "/about"
    }]

    const homeTitles = [{
        firstTitle: "conectando",
        secondTitle: "CONHECIMENTO",
        thirdTitle: "acadêmico",
        subtitle:"publicações acadêmicas conectadas de forma intuitiva, ultilizando redes especializadas, facilitando o acesso ao conhecimento."
    }]

    return { tooltipOpacity, titles, menuActive, homeTitles };
});
