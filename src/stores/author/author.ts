import { ref } from 'vue';
import { defineStore } from 'pinia';

import { AuthorService} from '@/services';
import type { IAuthor } from '@/interfaces';

export const useAuthorStore = defineStore('author', () => {
    const authors = ref<IAuthor[]>([]);
    const authorService = new AuthorService();

    async function populateAuthors(){
        authors.value = authorService.getAuthors()
        console.log(authors.value)
    }

    return{
        authors,
        populateAuthors
    }

})