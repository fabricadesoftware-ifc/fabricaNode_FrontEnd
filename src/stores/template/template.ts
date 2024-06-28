import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template', () => {

    const tooltipOpacity = ref(0);

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

    return { tooltipOpacity, titles };
});
