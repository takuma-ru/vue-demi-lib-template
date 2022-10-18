import {
  defineComponent,
  h,
  install,
  isVue3,
  ref,
  toRefs,
  watch,
} from 'vue-demi'
import { useVModel } from '@vueuse/core'
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
    const runtime = ref(0)

    /* -- computed -- */


    /* -- watch -- */
    watch(propsRef.modelValue, (newVal) => {
      console.log(newVal)
    })

    /* -- life cycle -- */
    /* setInterval(() => {
      runtime.value += 0.5
      console.log(runtime.value)
    }, 500); */

    /* -- render -- */

    return () => (
      propsRef.modelValue.value &&
        h('div', { class: 'lib' }, [
          h('p', `hello world ${propsRef.modelValue.value}`),
        ])
    )
  },
})