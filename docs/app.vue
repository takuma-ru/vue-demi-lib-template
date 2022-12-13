<template>
  <div id="app">
    <Header />
    <NuxtPage />
    <NuxtLoading ref="loading" />
  </div>
</template>

<script lang="ts" setup>
import 'material-symbols';

const nuxtApp = useNuxtApp()
/* -- type, interface -- */

/* -- store -- */
const {
  colorMode,
  setSytemMode
} = useColorModeStore()
const { color } = useColorStore()

/* -- variable(ref, reactive, computed) -- */
const loading = ref()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
setSytemMode()

nuxtApp.hook('page:start', () => {
  loading.value.start()
})

nuxtApp.hook('page:finish', () => {
  loading.value.finish()
  window.scrollTo(0, 0)
})
</script>

<style lang="scss">
html, body {
  margin: 0px;
  font-family: 'Noto Sans JP', sans-serif;

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
      background-color: v-bind("color.theme.complementaryDarken[1]");
      border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorMode === 'dark' ? color.black.lighten[1]: color.black.lighten[2]");
    background-clip: content-box;
  }
}

#app {
  background-color: v-bind("color.theme.background");
  color: v-bind("color.theme.text");
}

main {
  width: min(calc(100vw - 64px), 800px);
  height: calc(100vh - 64px - 64px);

  overflow-y: auto;
  padding: 2rem;
  margin: auto;
}

.sub-text {
  color: v-bind("color.theme.subText")
}

hr {
  width: 100%;
  height: 1px;
  bottom: 0px;
  margin: 1rem 0px;

  background-color: v-bind("color.theme.subText");
  border: none;
}

</style>