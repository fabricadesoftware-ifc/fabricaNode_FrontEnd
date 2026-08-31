import { ref } from 'vue';
import { defineStore } from 'pinia';

import { AuthorService} from '@/services';
import type { IAuthor } from '@/interfaces';

export const useAuthorStore = defineStore('author', () => {
    const authors = ref<IAuthor[]>([]);
    const authorService = new AuthorService();

    async function populateAuthors(){
        authors.value = await authorService.getAuthors()
    }

    async function favoritar(authorToToggle: IAuthor) {
        try {
            authorToToggle.favorite = await authorService.favoritar(authorToToggle.id);
        } catch (error) {
            console.log(error)
        }
    }

    return{
        authors,
        populateAuthors,
        favoritar
    }

})
