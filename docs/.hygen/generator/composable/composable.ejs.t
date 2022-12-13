---
to: composables/<%= atomic %>/<%= h.changeCase.camel(storeName) %>Store.ts
---
export const use<%= h.changeCase.pascal(storeName) %>Store = defineStore('<%= h.changeCase.camel(storeName) %>', () => {
  /* -- state -- */
  const <%= h.changeCase.camel(storeName) %> = ref(false)

  /* -- mutation -- */
  const <%= h.changeCase.camel(storeName) %>Mutation = () => {
    <%= h.changeCase.camel(storeName) %>.value = true
  }

  /* -- action -- */

  /* -- other -- */

  return {
    <%= h.changeCase.camel(storeName) %>: readonly(<%= h.changeCase.camel(storeName) %>),
    <%= h.changeCase.camel(storeName) %>Mutation
  }
})
