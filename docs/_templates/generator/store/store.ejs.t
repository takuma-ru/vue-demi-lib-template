---
to: store/<%= h.changeCase.camel(storeName) %>Store.ts
---
<% if (isInterface) { -%>
import { I<%= h.changeCase.pascal(storeName) %> } from '~/types/store/<%= h.changeCase.camel(storeName) %>Store'
<% } else { -%>
import { <%= h.changeCase.pascal(storeName) %>Type } from '~/types/store/<%= h.changeCase.camel(storeName) %>Store'
<% } -%>

export const use<%= h.changeCase.pascal(storeName) %>Store = () => {
  /* -- state -- */
  <% if (isInterface) { -%>
  const <%= h.changeCase.camel(storeName) %> = useState<I<%= h.changeCase.pascal(storeName) %>>('<%= h.changeCase.pascal(storeName) %>', () => (/* initial value */))
  <% } else { -%>
  const <%= h.changeCase.camel(storeName) %> = useState<<%= h.changeCase.pascal(storeName) %>Type>('<%= h.changeCase.pascal(storeName) %>', () => (/* initial value */))
  <% } -%>
  /* -- mutations -- */

  /* -- actions -- */

  return {
    <%= h.changeCase.camel(storeName) %>: readonly(<%= h.changeCase.camel(storeName) %>),
  }
}