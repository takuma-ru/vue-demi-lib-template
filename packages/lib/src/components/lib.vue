<template>
  <div class="lib">
    text
  </div>
</template>

<style lang="scss">
.lib {
  font-size: 2rem;
}
</style>

<script lang="ts">
  /* --  -- */
  import {
    defineComponent,
    install,
    isVue3,
  } from 'vue-demi'
  import { useVModel } from '@vueuse/core'

  install()

  export default defineComponent({
    name: 'LibComponent', // 🐈

    props: {
      modelValue: {
        type: Boolean,
        required: true,
      }
    },

    emits: [
      'modelValue'
    ],

    setup(props, context) {
      // console.log(isVue3 ? 'vue3' : 'vue2')

      /* -- composables -- */


      /* -- variables -- */
      const vModel = useVModel(props, 'modelValue', context.emit)

      /* -- computed -- */


      /* -- life cycle -- */


      /* -- render -- */
    },
  })

</script>