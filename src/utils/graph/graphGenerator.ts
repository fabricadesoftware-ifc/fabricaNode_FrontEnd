import type { Nodes, Edges } from 'v-network-graph';
import type { IArticle } from '@/interfaces';


function generateGraphFromArticles(articles: IArticle[]): { nodes: Nodes, edges: Edges } {
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
              acc[edgeKey1] = { source: `node${index}`, target: `node${otherIndex}`, label: keyword, width: 1 };
            } else {
              acc[edgeKey1] ? acc[edgeKey1].width += 1 : acc[edgeKey2].width += 1;
            }
          }
        });
      });
      return acc;
    }, {} as Edges);

    return { nodes, edges };
  }

function generateGraphFromKeywords(articles: IArticle[]): { nodes: Nodes, edges: Edges } {
    const keywordSet = new Set<string>();
    articles.forEach(article => {
      article.keywords.forEach(keyword => {
        keywordSet.add(keyword);
      });
    });

    const keywords = Array.from(keywordSet);
    const nodes = keywords.reduce((acc, keyword, index) => {
      acc[`node${index}`] = { name: keyword, radius: 16 };
      return acc;
    }, {} as Nodes);

    const keywordConnections = articles.reduce((acc, article) => {
      article.keywords.forEach((keyword) => {
        if (!acc[keyword]) {
          acc[keyword] = 0;
        }
        acc[keyword] += 1;
      });
      return acc;
    }, {} as Record<string, number>);

    const edges = articles.reduce((acc, article, index) => {
      article.keywords.forEach((keyword) => {
        const sourceIndex = keywords.indexOf(keyword);
        const edgeKey = `edge${index}-${sourceIndex}`;
        if (!acc[edgeKey]) {
          acc[edgeKey] = { source: `node${index}`, target: `node${sourceIndex}`, label: article.label };
        }
      });
      return acc;
    }, {} as Edges);

    for (const [keyword, count] of Object.entries(keywordConnections)) {
      const nodeIndex = keywords.indexOf(keyword);
      if (nodes[`node${nodeIndex}`]) {
        nodes[`node${nodeIndex}`].width = 16 + count * 2;
      }
    }

    return { nodes, edges };
  }

export { generateGraphFromArticles, generateGraphFromKeywords };
