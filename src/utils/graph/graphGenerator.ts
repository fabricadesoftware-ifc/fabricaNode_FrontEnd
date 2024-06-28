import type { Nodes, Edges } from 'v-network-graph';
import type { IArticle } from '@/interfaces';


function generateGraphFromArticles(articles: IArticle[]) {
    const nodes = articles.reduce((acc, article, index) => {
        acc[`node${index}`] = { name: article.label, ...article };
        return acc;
    }, {} as Nodes);

    const edges = articles.reduce((acc, article, index) => {
        article.keywords.forEach((keyword) => {
            articles.forEach((otherArticle, otherIndex) => {
                if (index !== otherIndex && otherArticle.keywords.includes(keyword)) {
                    const edgeKey1 = `edge${index}-${otherIndex}`;
                    const edgeKey2 = `edge${otherIndex}-${index}`;
                    if (!acc[edgeKey1] && !acc[edgeKey2]) {
                        acc[edgeKey1] = { source: `node${index}`, target: `node${otherIndex}`, label: keyword };
                    }
                }
            });
        });
        return acc;
    }, {} as Edges);

    return { nodes, edges };
}

export { generateGraphFromArticles };
