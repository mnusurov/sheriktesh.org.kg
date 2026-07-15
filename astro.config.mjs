import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.sheriktesh.org.kg',
  trailingSlash: 'never',
  output: 'static',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: true }
  }
})
