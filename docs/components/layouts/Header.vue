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
      <div
        v-if="displayType !== 'sm'"
        class="text"
      >
        lib-name
      </div>
    </div>
    <div class="buttons">
      <BaseButton
        is-icon
        to="https://github.com/takuma-ru"
      >
        <Github />
      </BaseButton>
      <BaseButton
        :icon="colorMode === 'dark' ? 'dark_mode': 'light_mode'"
        is-icon
        @click="switchMode()"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
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
const {
  displayType
} = displayStatus()

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

  width: min(calc(100vw), 1024px);
  height: 64px;
  padding: 2rem;
  margin: auto;
  border-bottom: solid 1px v-bind("colorMode === 'dark' ? color.black.lighten[1] : color.black.lighten[2]");
  box-sizing: border-box;

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