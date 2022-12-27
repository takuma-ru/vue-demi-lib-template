<template>
  <span class="material-symbols-rounded">
    {{ props.icon }}
  </span>
</template>

<script lang="ts" setup>
import { IconNameType } from '~/types/icon/iconName'

/* -- type, interface -- */
export interface IIconProps {
  icon?: IconNameType
  size?: string
  color?: string
  fill?: boolean
  wght?: number
  grad?: number
  opsz?: number
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IIconProps>(), {
  icon: undefined,
  size: '24px',
  fill: false,
  wght: 600,
  grad: 0,
  opsz: 48
})

/* -- store -- */
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
.material-symbols-rounded {
  font-variation-settings: 'FILL' v-bind('props.fill ? 1 : 0'), 'wght' v-bind('props.wght'), 'GRAD' v-bind('props.grad'), 'opsz' v-bind('props.opsz');
  font-size: v-bind('props.size');
  color: v-bind("props.color ? props.color : colorStore.color.theme.text");
  text-align: center;
  user-select: none;
}
</style>
