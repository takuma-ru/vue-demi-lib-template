---
to: pages/<%= h.changeCase.camel(pageName) %>.vue
---

<template>
  <div id="<%= h.changeCase.camel(pageName)  %>">
    <%= h.changeCase.camel(pageName)  %>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: '<%= title %>'
})
</script>

<style lang="scss" scoped>
#<%= h.changeCase.camel(pageName)  %> {

}
</style>
