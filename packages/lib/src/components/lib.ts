import {
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


    /* -- watch -- */
    watch(propsRef.modelValue, (newVal) => {
      console.log(`${new Date().getDate()}日 | v-model: ${newVal}`)
    })

    /* -- life cycle -- */
    tryOnMounted(() => {
      console.log('on mounted !')
    })

    /* setInterval(() => {
      runtime.value += 0.5
      console.log(runtime.value)
    }, 500); */

    /* -- render -- */

    return () => (
      /* propsRef.modelValue.value */ true &&
        h('div', { class: 'lib' }, [
          h('h1', `hello world ${propsRef.modelValue.value} ${vModel.value}`),
        ])
    )
  },
})