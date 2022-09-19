import {
  computed,
  defineComponent,
  h,
  ref,
  toRefs,
  watch,
  install,
} from 'vue-demi'

import './lib.scss'

import * as CSS from 'csstype'
import { useVModel } from '@vueuse/core'
type CSSProperties = CSS.Properties<string | number>
type StyleValue = CSSProperties | Array<StyleValue>

install()

export default defineComponent({
  name: 'LibComponent', // 🐈

  /* --  -- */

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
    /* -- composables -- */


    /* -- variables -- */
    const vModel = useVModel(props, 'modelValue', context.emit)

    /* -- computed -- */


    /* -- life cycle -- */


    /* -- render -- */
    return () => {
      h('div', null)
    }
  }
})