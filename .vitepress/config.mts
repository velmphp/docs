import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Velm",
  description: "A truly Decoupled Modular Architecture for Laravel",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: {
        '/docs/': [
        {
          text: 'Introduction',
          
          items: [
            { text: 'Home', link: '/docs/' },
            { text: 'Getting Started', link: '/docs/getting-started' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/velmphp/framework' }
    ],
  },
  markdown: {
    typographer: true,
    theme: 'one-dark-pro',
    defaultHighlightLang: 'php',
    lineNumbers: true,
  }
})
