<template>
  <button
    id="Button"
    :disabled="disabled"
    :size="!isIcon && size"
    :fab="fab"
    :icon="isIcon"
    @click="click()"
  >
    <div class="text">
      <Icon
        v-if="icon"
        :color="!isIcon ? dependsLuminanceColor(props.color) : null"
        size="24px"
        :fill="props.iconProps?.fill"
        :wght="props.iconProps?.wght"
        :style="!isIcon && 'margin-right: 0.4rem'"
      >
        {{ icon }}
      </Icon>
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { useColorStore } from '~~/store/colorStore'
import { dependsLuminanceColor } from '~/hooks/utils/dependsLuminanceColor'
import { IProps as IIconProps } from '~/components/content/Icon.vue'
import { IconNameType } from '~~/types/icon/iconName';

/* -- type, interface -- */
interface IEmits {
  (e: 'click'): void
}

interface IProps {
  disabled?: boolean
  icon?: IconNameType
  iconProps?: IIconProps
  color?: string
  size?: 'small' | 'normal' | 'large'
  fab?: boolean
  isIcon?: boolean
  to?: string
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IProps>(), {
  color: '#030300',
  size: 'normal'
})

const emit = defineEmits<IEmits>()

/* -- store -- */
const {
  color
} = useColorStore()

/* -- state -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const click = () => {
  props.to ? navigateTo(props.to) : emit('click')
}

/* -- watch -- */
/* -- life cycle -- */

</script>

<style lang="scss" scoped>
#Button {
  position: relative;
  width: auto;
  height: 100%;

  border: none;
  border-radius: 8px;
  background-color: v-bind('props.color');
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  .text {
    display: inline-flex;
    position: relative;
    z-index: 1;
    height: 24px;
    margin: 0rem 0.4em;

    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: v-bind('dependsLuminanceColor(props.color)');

    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }

  &:hover::before {
    position: absolute;
    z-index: 2;
    content: '';
    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    border-radius: 8px;
    background-color: #CCCCCC2D;
  }

  &:disabled {
    color: rgba(16, 16, 16, 0.5);
    cursor: not-allowed;

    .text {
      color: rgba(16, 16, 16, 0.5);
    }

    svg path {
      fill: rgba(16, 16, 16, 0.5);
    }

    &::after {
      position: absolute;
      z-index: 0;
      content: '';
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;

      border-radius: 8px;
      background-color: v-bind('color.black.lighten[2]');
    }
  }

  &:disabled:hover::before {
    position: absolute;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;

    border-radius: 8px;
    background-color: #CCCCCC00;
  }

  &[fab] {
    .text {
      height: calc(100% - 16px);
      padding: 8px;
    }
  }

  &[icon = true] {
    width: 40px;
    height: 40px;

    background-color: transparent;

    .text {
      height: calc(100% - 16px);

      padding: 0px;
      margin: 0px;
    }
  }

  &[size = "small"] {
    width: auto;
    height: 24px;
  }

  &[size = "normal"] {
    width: auto;
    height: 40px;
  }

  &[size = "large"] {
    width: auto;
    height: 64px;
    border-radius: 16px;

    &:hover::before {
      border-radius: 16px;
    }
  }
}
</style>