<template>
  <header id="app-header">
    <div
      class="title"
      @click="moveToIndex"
    >
      <img
        src="https://nuxtjs.org/design-kit/colored-logo.svg"
        alt="logo"
      >
      <div class="text">
        lib-name
      </div>
    </div>
    <div class="buttons">
      <Button
        is-icon
        to="https://github.com/takuma-ru"
      >
        <LogosGithub />
      </Button>
      <Button
        :icon="colorMode === 'dark' ? 'dark_mode': 'light_mode'"
        is-icon
        @click="switchMode()"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import Button from '~/components/content/CButton.vue'
import { useColorModeStore } from '~/store/colorModeStore';
import { useColorStore } from '~/store/colorStore';

/* -- type, interface -- */

/* -- props, emit -- */

/* -- store -- */
const {
  colorMode,
  switchMode
} = useColorModeStore()

const {
  color
} = useColorStore()

/* -- variable(ref, reactive, computed) -- */
/* -- function -- */
const moveToIndex = () => {
  navigateTo('/')
}
/* -- watch -- */
/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(calc(100vw - 64px), 800px);
  height: 64px;
  padding: 0px 32px;
  margin: auto;

  .title {
    display: flex;
    align-items: center;

    cursor: pointer;

    img {
      width: 32px;
      height: 32px;
      margin-right: 1em;
    }

    .text {
      font-size: 1.5em;
      font-weight: 500;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
  }
}
</style>