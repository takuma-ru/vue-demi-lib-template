<template>
  <th>
    <slot />
  </th>
</template>

<script lang="ts" setup>
/* -- type, interface -- */


/* -- store -- */
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
th {
  display: table-cell;

  padding: 1rem 0.5rem;

  color: v-bind("colorStore.color.theme.subText");
  vertical-align: inherit;
  font-weight: bold;
  text-align: start;
  white-space: nowrap;
}
</style>
