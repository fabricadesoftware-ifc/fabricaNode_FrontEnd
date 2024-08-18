export interface IPublication {
    id: number;
    label: string;
    link: string;
    authors: string[];
    keywords: string[];
    resume: string;
    categories: string[];
    type: string;
    favorite: boolean;
};