import { ref } from 'vue';
import { defineStore } from 'pinia';

import { PublicationService, AuthorService, CategoryService, KeywordService, TypeService } from '@/services';
import type { IPublication, IAuthor, ICategory, IKeyword, IType } from '@/interfaces';

export const usePublicationStore = defineStore('publication', () => {
    const entirePublications = ref<IPublication[]>([])
    const publications = ref<IPublication[]>([])
    const publication = ref<IPublication | null>(null)

    const publicationService = new PublicationService()
    const authorService = new AuthorService();
    const categoryService = new CategoryService();
    const keywordService = new KeywordService();
    const typeService = new TypeService()

    async function populatePublications() {
        try {
            entirePublications.value = []
            publications.value = publicationService.getPublications()

            for (let i = 0; i < publications.value.length; i++) {
                const currentPublication = publications.value[i];

                const authors: IAuthor[] = await Promise.all(
                    currentPublication.authors.map(async (authorId) => {
                        const author = await authorService.getAuthorById(Number(authorId));
                        if (author) {
                            return author;
                        }
                        throw new Error(`Author not found: ${authorId}`);
                    })
                )

                const categories: ICategory[] = await Promise.all(
                    currentPublication.categories.map(async (categoryId) => {
                        const category = await categoryService.getCategoryById(Number(categoryId));
                        if (category) {
                            return category;
                        }
                        throw new Error(`Category not found: ${categoryId}`);
                    })
                )

                const keywords: IKeyword[] = await Promise.all(
                    currentPublication.keywords.map(async (keywordId) => {
                        const keyword = await keywordService.getKeywordById(Number(keywordId));
                        if (keyword) {
                            return keyword;
                        }
                        throw new Error(`Keyword not found: ${keywordId}`);
                    })
                )
                const type: IType | undefined = typeService.getTypeById(Number(currentPublication.type));

                const fullPublication: IPublication = {
                    ...currentPublication,
                    authors,
                    categories,
                    keywords,
                    type
                }
                entirePublications.value.push(fullPublication)
                console.log(fullPublication)
            }
        } catch (error) {
            console.log(error)
        }
    }
        return {
        entirePublications,
        publications,
        publication,
        populatePublications
    }
});
