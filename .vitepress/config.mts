import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Velm",
  description: "A truly Decoupled Modular Architecture for Laravel",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    siteTitle: "<strong class='gradient-text'>Velm</strong>",
    logo: '/logo-concept.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/getting-started/introduction' },
            { text: 'Installation', link: '/docs/getting-started/installation' },
            { text: 'Quick Start', link: '/docs/getting-started/quick-start' },
          ],
        },
        {
          text: 'Concepts',
          items: [
            { text: 'Logical Names', link: '/docs/concepts/logical-names' },
            { text: 'Pipelines', link: '/docs/concepts/pipelines' },
            { text: 'Super Calls', link: '/docs/concepts/super-calls' },
            { text: 'Registry', link: '/docs/concepts/registry' },
          ],
        },
        {
          text: 'Models',
          items: [
            { text: 'Overview', link: '/docs/models/overview' },
            { text: 'Logical Models', link: '/docs/models/logical-models' },
            { text: 'Attributes', link: '/docs/models/attributes' },
            { text: 'Scopes', link: '/docs/models/scopes' },
            { text: 'Properties', link: '/docs/models/properties' },
          ],
        },
        {
          text: 'Services',
          items: [
            { text: 'Overview', link: '/docs/services/overview' },
            { text: 'Logical Services', link: '/docs/services/logical-services' },
            { text: 'Pipelines', link: '/docs/services/pipelines' },
            { text: 'Best Practices', link: '/docs/services/best-practices' },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'IDE Support', link: '/docs/advanced/ide-support' },
            { text: 'Performance', link: '/docs/advanced/performance' },
            { text: 'Testing', link: '/docs/advanced/testing' },
          ],
        },
        {
          text: 'API',
          items: [
            { text: 'Helpers', link: '/docs/api/helpers' },
            { text: 'Pipeline Runtime', link: '/docs/api/class-pipeline-runtime' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/velmphp/velm' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/velmphp/velm/blob/main/LICENSE.md">MIT License</a>.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/coolsam726">Sam Maosa</a>'
    }
  },
  markdown: {
    typographer: true,
    theme: {light: 'one-dark-pro', dark: 'one-dark-pro'},
    defaultHighlightLang: 'php',
    lineNumbers: true,
  }
})
