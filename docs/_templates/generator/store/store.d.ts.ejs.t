---
to: types/store/<%= h.changeCase.camel(storeName) %>Store.d.ts
---

<% if (isInterface) { -%>
export interface I<%= h.changeCase.pascal(storeName) %> {
}
<% } else { -%>
export type <%= h.changeCase.pascal(storeName) %>Type = unknown
<% } -%>
