import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'https://ccbridge.bruniaux.com',
  trailingSlash: 'always',

  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        if (item.url === 'https://ccbridge.bruniaux.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' }
        }
        return { ...item, priority: 0.7, changefreq: 'monthly' }
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
})
