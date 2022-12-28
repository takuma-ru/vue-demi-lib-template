<template>
  <div id="proseTable">
    <table>
      <slot />
    </table>
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
</script>

<style lang="scss" scoped>
#proseTable {
  position: relative;

  overflow-y: auto;

  table {
    width: 100%;

    border-collapse: collapse;
  }
}
</style>
