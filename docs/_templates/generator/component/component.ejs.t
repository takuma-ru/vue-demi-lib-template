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

<% if (isEmit) { -%>
interface IEmits {
  (e: 'click'): void
}
<% } -%>

/* -- store -- */

/* -- props, emit -- */
<% if (isProps) { -%>
const props = withDefaults(defineProps<IProps>(), {
})
<% } -%>

<% if (isEmit) { -%>
const emit = defineEmits<IEmits>()
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