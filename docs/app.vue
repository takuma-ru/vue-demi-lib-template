<template>
  <div>
    <Header />
    <NuxtPage />
    <NuxtLoading ref="loading" />
  </div>
</template>

<script lang="ts" setup>
import 'material-icons/iconfont/material-icons.css'
import NuxtLoading from './components/layouts/NuxtLoading.vue';

const loading = ref(null)

const nuxtApp = useNuxtApp()

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

main {
  width: min(100vw, 960px);
  min-height: calc(100vh - 64px - 64px);
  padding: 32px;
  margin: auto;
}
</style>