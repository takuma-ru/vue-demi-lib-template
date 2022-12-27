<template>
  <div id="stackbitz">
    <iframe
      :src="`https://stackblitz.com/edit//${projectId}?embed=1&file=src/${fileName}&hideExplorer=1&hideNavigation=1&theme=${colorModeStore.colorMode}&view=preview`"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IStackbitzProps {
  projectId: string;
  fileName: string
}

/* -- store -- */
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IStackbitzProps>(), {
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#stackbitz {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
