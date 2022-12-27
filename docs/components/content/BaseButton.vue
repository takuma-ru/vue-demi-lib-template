<template>
  <button
    id="Button"
    :disabled="disabled"
    :size="!isIcon && size"
    :fab="fab"
    :icon="isIcon"
    :outlined="outlined"
    @click="click()"
  >
    <div class="text">
      <Icon
        v-if="icon"
        :icon="icon"
        :color="!isIcon && !outlined ? dependsLuminanceColor(backgroundColor) : undefined"
        size="24px"
        :fill="props.iconProps?.fill"
        :wght="props.iconProps?.wght"
        :style="!isIcon && 'margin-right: 0.4rem'"
      />
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { IIconProps } from '~/components/content/Icon.vue'
import { IconNameType } from '~/types/icon/iconName';

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
  outlined? :boolean
  to?: string
}

/* -- props, emit -- */
const props = withDefaults(defineProps<IProps>(), {
  icon: undefined,
  iconProps: undefined,
  color: undefined,
  size: 'normal',
  to: undefined,
})

const emit = defineEmits<IEmits>()

/* -- store -- */
const colorStore = useColorStore()

/* -- state -- */

/* -- variable(ref, reactive, computed) -- */
const backgroundColor = computed(() => {
  return props.color ? props.color : colorStore.color.theme.text
})

/* -- function -- */
const click = () => {
  props.to ? navigateTo(props.to, { external: true }) : emit('click')
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
  background-color: v-bind("backgroundColor");
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  .text {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    position: relative;
    z-index: 1;
    height: 24px;
    margin: 0rem 0.4em;

    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: v-bind('dependsLuminanceColor(backgroundColor)');
    white-space: nowrap;
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
      background-color: v-bind('colorStore.color.black.lighten[2]');
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

    &:hover::before {
      border-radius: 50%;
    }

    .text {
      height: calc(100% - 16px);

      padding: 0px;
      margin: 0px;
    }
  }

  &[outlined = true] {
    background-color: transparent;

    border: solid 2px v-bind("colorStore.color.theme.subText");
    .text {
      color: v-bind("colorStore.color.theme.text");
      font-weight: 600;
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