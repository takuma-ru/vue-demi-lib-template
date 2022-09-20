<template>
  <transition name="lib-transition">
    <div v-if="modelValue" class="lib">
      text
    </div>
  </transition>
</template>

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

    return {
      vModel
    }
  },
})
</script>

<style lang="scss">
.lib {
  font-size: 2rem;
}

.lib-transition {
    &-enter {
      & {
        opacity: 0;
      }
      &-from {
        opacity: 0;
      }
      &-active {
        transition: all 0.2s ease-out;
      }
      &-to {
        opacity: 1;
      }
    }

    &-leave {
      & {
        opacity: 1;
      }
      &-from {
        opacity: 1;
      }
      &-active {
        transition: all 0.2s ease-out;
      }
      &-to {
        opacity: 0;
      }
    }
  }
</style>