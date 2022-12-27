<template>
  <div id="componentPage">
    <span class="title">
      {{ componentName }}
    </span>
    <p class="sub-text">
      {{ descriptions }}
    </p>

    <hr>

    <div class="demo">
      <h2>Demo</h2>
      <div class="demo-contents">
        <slot name="Demo" />
      </div>
    </div>

    <div class="usage">
      <slot name="Usage" />
    </div>

    <div class="props">
      <slot name="Props" />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IComponentPageProps {
  componentName: string;
  descriptions: string
}

/* -- store -- */
const colorModeStore = useColorModeStore()

const colorStore = useColorStore()

/* -- props, emit -- */
const props = withDefaults(defineProps<IComponentPageProps>(), {
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#componentPage {
  .title {
    font-size: 1.75em;
    font-weight: 700;
  }

  .demo {
    &-contents {
      padding: 2rem 1rem;

      border-radius: 0.5rem;
      border: solid 2px v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
    }
  }
}
</style>
