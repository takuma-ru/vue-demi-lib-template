<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import 'material-icons/iconfont/material-icons.css'

</script>

<style lang="scss">
html, body {
  margin: 0px;
}

main {
  width: min(100vw, 960px);
  min-height: calc(100vh - 64px - 64px);
  padding: 32px;
  margin: auto;
}
</style>