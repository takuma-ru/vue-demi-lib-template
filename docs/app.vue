<template>
  <div id="app">
    <Header />
    <NuxtPage />
    <NuxtLoading ref="loading" />
  </div>
</template>

<script lang="ts" setup>
import 'material-icons/iconfont/material-icons.css'
import NuxtLoading from './components/layouts/NuxtLoading.vue';
import { useColorModeStore } from './store/colorModeStore';
import { useColorStore } from './store/colorStore';

const nuxtApp = useNuxtApp()

const loading = ref()
const { setSytemMode } = useColorModeStore()
const { color } = useColorStore()

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
</style>