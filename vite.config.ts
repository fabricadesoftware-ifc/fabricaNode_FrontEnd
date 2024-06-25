import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Fabrica Node',
        short_name: 'FabricaNode',
        description: 'O Fábrica Node é um projeto inovador que utiliza a teoria dos grafos para organizar e distribuir artigos dos servidores do Instituto Federal Catarinense (IFC) de maneira eficiente e dinâmica. Nosso sistema constrói um grafo interativo, onde cada nó representa um artigo e as arestas indicam conexões baseadas em categorias e palavras-chave. Isso permite uma visualização intuitiva e uma navegação simplificada pelo vasto acervo de pesquisas, facilitando a descoberta e o acesso a conteúdos relevantes para estudantes, pesquisadores e a comunidade acadêmica.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        id: 'com.fabrica-node.app',
        orientation: 'any',
        background_color: '#ffffff',
        start_url: '.',
        launch_handler: {
          client_mode: ['navigate-existing', 'auto'],
        },
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});