import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template', () => {

    const tooltipOpacity = ref(0);

    return { tooltipOpacity };
});
