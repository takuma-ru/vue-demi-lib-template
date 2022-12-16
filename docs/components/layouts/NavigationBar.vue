<template>
  <div
    v-if="displayType === 'lp' || displayType === 'pc'"
    id="navigationBar"
  >
    <div
      v-for="sectionData in pathList"
      :key="sectionData.title"
      class="section"
    >
      <Icon
        :icon="sectionData.icon"
        class="section-icon"
      />
      <p class="sction-title">
        {{ sectionData.title }}
      </p>
      <div class="paths">
        <a
          v-for="path in sectionData.paths"
          :key="path.name"
          :style="{
            color: isNowPath(path.path) ? colorMode === 'dark' ? color.green.lighten[1] : color.green.darken[1] : color.theme.subText,
            fontWeight: isNowPath(path.path) ? 900 : 'normal',
          }"
          @click="navigateTo(path.path)"
        >
          {{ path.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface INavigationBarProps {
  modelValue: any;
}

export interface INavigationBarEmits {
  (e: 'update:modelValue'): void
}

/* -- store -- */
const {
  colorMode
} = useColorModeStore()

const {
  color
} = useColorStore()

const {
  displayType
} = displayStatus()

/* -- props, emit -- */
const props = withDefaults(defineProps<INavigationBarProps>(), {
  modelValue: false
})

const emit = defineEmits<INavigationBarEmits>()

/* -- variable(ref, reactive, computed) -- */
const vModel = useVModel(props, 'modelValue', emit)
const {
  pathList,
  isNowPath
} = usePath()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationBar {
  justify-self: end;

  width: 200px;
  margin: 0px 1rem 2rem 0px;

  .section {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;

    margin-bottom: 1rem;

    .section-icon {
      grid-column: 1;
      grid-row: 1;

      margin-right: 0.5rem;
    }

    .sction-title {
      grid-column: 2;
      grid-row: 1;

      margin: 0 0 1rem 0;

      font-weight: bold;
    }

    .paths {
      grid-column: 2;
      grid-row: 2;

      display: flex;
      flex-flow: column;

      a {
        display: inline-block;

        position: relative;
        margin: 0 0 1rem 0;

        text-decoration: none;
        cursor: pointer;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;

          background: v-bind("color.green.default");
          border-radius: 1px;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform .3s;
        }

        &:hover::after {
          transform: scale(1, 1);
        }
      }
    }
  }
}
</style>
