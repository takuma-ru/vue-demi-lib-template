<template>
  <div id="codeSandbox">
    <iframe
      :src="`https://codesandbox.io/embed/${projectId}?autoresize=1&fontsize=14&hidenavigation=1&theme=${colorModeStore.colorMode}&view=preview&hidedevtools=1&hidenavigation=0`"
      style="border: 0; overflow: hidden;"
      title="Demo"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ICodeSandboxProps {
  projectId: string;
}

/* -- store -- */
const colorModeStore = useColorModeStore()

/* -- props, emit -- */
withDefaults(defineProps<ICodeSandboxProps>(), {
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#codeSandbox {
  position: relative;
  height: 300px;
  width: 100%;

  iframe {
    height: calc(100%);
    width: 100%;

    border-radius: 0.5rem;
  }
}
</style>
