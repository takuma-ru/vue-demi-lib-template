<template>
  <header id="app-header">
    <div class="right-contents">
      <NavigationButton
        :style="{
          marginRight: '0.5rem'
        }"
      />
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
    </div>
    <div class="buttons">
      <BaseButton
        is-icon
        to="https://github.com/takuma-ru"
      >
        <Github />
      </BaseButton>
      <BaseButton
        :icon="colorModeStore.colorMode === 'dark' ? 'dark_mode': 'light_mode'"
        is-icon
        @click="colorModeStore.switchMode()"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- props, emit -- */

/* -- store -- */
const colorModeStore = useColorModeStore()

const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */
const {
  displayType
} = displayStatusStore()

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
  padding: 1rem;
  margin: auto;
  border-bottom: solid 1px v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
  box-sizing: border-box;

  .right-contents {
    display: flex;
  }

  .title {
    display: flex;
    align-items: center;

    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      margin-left: 1em;

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