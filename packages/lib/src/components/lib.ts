import {
  computed,
  defineComponent,
  ref,
  toRefs,
  watch,
  install,
  isVue3,
  h,
  App,
} from 'vue-demi'
import { useVModel } from '@vueuse/core'
import * as CSS from 'csstype'
import './lib.scss'
/* import h, { slot } from '../scripts/h-demi' */

type CSSProperties = CSS.Properties<string | number>
type StyleValue = CSSProperties | Array<StyleValue>

interface Options {
  props?: Object,
  domProps?: Object
  on?: Object
}

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
    console.log(isVue3 ? 'vue3' : 'vue2')

    /* -- composables -- */


    /* -- variables -- */
    const vModel = useVModel(props, 'modelValue', context.emit)

    /* -- computed -- */


    /* -- life cycle -- */


    /* -- render -- */
  },

  render() {
    return h('div', {
      class: 'lib'
    }, 'text')
  },
})