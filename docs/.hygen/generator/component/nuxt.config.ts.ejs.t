---
to: nuxt.config.ts
inject: true
before: 'components/layouts'
skip_if: components/<%= atomic %>
---
      'components/<%= atomic %>',