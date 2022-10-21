import {
  computed,
  defineComponent,
  h,
  install,
  isVue3,
  ref,
  toRefs,
  watch,
} from 'vue-demi'
import {
  tryOnMounted,
  useVModel
} from '@vueuse/core'

import { StyleValueType } from '~/types/StyleValueType'
import './lib.scss'

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
    const propsRef = toRefs(props)

    /* -- computed -- */
    const slot = computed(() => {
      return context.slots.default?.()
    })

    /* -- watch -- */
    watch(propsRef.modelValue, (newVal) => {
    })

    /* -- life cycle -- */
    tryOnMounted(() => {
      console.log('on mounted !')
    })

    /* -- render -- */
    return () => (
      vModel.value &&
        h('div', { class: 'lib' }, [
          h('p', slot.value),
        ])
    )
  },
})