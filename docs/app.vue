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
const { setSytemMode } = useColorModeStore()
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
}

#app {
  background-color: v-bind("color.theme.background");
  color: v-bind("color.theme.text");
}

main {
  width: min(calc(100vw - 64px), 800px);
  min-height: calc(100vh - 64px - 64px);
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