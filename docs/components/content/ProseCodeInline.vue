<template>
  <code><slot /></code>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorModeStore = useColorModeStore()
const colorStore = useColorStore()

/* -- props, emit -- */
/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
code {
  padding: 0.25rem 0.5rem;

  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.darken[2] : colorStore.color.black.lighten[3]");
}
</style>
