import { ref } from 'vue'
import { defineStore } from 'pinia'

import { PublicationService, AuthorService, CategoryService, KeywordService } from '@/services';

import type { IPublication, IAuthor } from '@/interfaces'

export const usePublicationStore = defineStore('template', () => {

    const entirePublications = ref<IPublication[]>([])
    const publications = ref<IPublication[]>([])
    const publication = ref<IPublication | null>(null)

    const publicationService = new PublicationService()
    const authorService = new AuthorService();
    const categoryService = new CategoryService();
    const keywordService = new KeywordService();

    async function populatePublications() {
        try {
            publications.value = publicationService.getPublications()

            for (let i = 0; i < publications.value.length; i++) {
                const currentPublication = publications.value[i];

                for (let j = 0; j < currentPublication.authors.length; j++) {
                    const currentAuthor = currentPublication.authors[j]
                    const author = await authorService.getAuthorById(currentAuthor.id)

                }

            }


        } catch (error) {
            console.log(error);

        }
    }
    return {


    }
})
