<template>
  <div id="getStartedPage">
    <span class="title">
      Get Started for {{ version }}
    </span>
    <p class="sub-text">
      {{ descriptions }}
    </p>
    <hr>
    <slot />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface IProps {
  version: string
  descriptions?: string
}

/* -- store -- */

/* -- props, emit -- */
const props = withDefaults(defineProps<IProps>(), {
  version: 'Vue2.7'
})

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#getStartedPage {
  .title {
    font-size: 1.5em;
    font-weight: 700;
  }
}
</style>