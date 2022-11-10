---
to: <%= atomic %>/<%= h.changeCase.pascal(componentName) %>.vue
---

<template>
  <div id="<%= h.changeCase.camel(componentName)  %>">
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
<% if (isProps) { -%>
export interface IProps {
}
<% } -%>

/* -- store -- */

/* -- props, emit -- */
<% if (isProps) { -%>
const props = withDefaults(defineProps<IProps>(), {
})
<% } -%>

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#<%= h.changeCase.camel(componentName)  %> {

}
</style>