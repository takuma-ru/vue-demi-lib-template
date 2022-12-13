---
to: utils/<%= atomic %>/<%= h.changeCase.camel(fileName) %>.ts
---
/**
 * <%= h.changeCase.camel(fileName) %>
 */
export const <%= h.changeCase.camel(fileName) %> = () => {
  console.log('<%= h.changeCase.camel(fileName) %>')
}
