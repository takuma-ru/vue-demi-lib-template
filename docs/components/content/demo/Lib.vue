<template>
  <div id="libDemo">
    <BaseButton>
      lib demo button
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ILibDemoProps {
  modelValue: any;
}

export interface ILibDemoEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<ILibDemoProps>(), {
  modelValue: false
})

const emit = defineEmits<ILibDemoEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#libDemo {

}
</style>
