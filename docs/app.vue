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
const colorModeStore =useColorModeStore()
const colorStore = useColorStore()

/* -- variable(ref, reactive, computed) -- */
const loading = ref()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */

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

  overflow: hidden;

  .dark {
    background-color: #171717;

    .contents {
      background-color: #171717;
    }
  }

  .light {
    background-color: #F2F2F2;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    border: 4.5px solid transparent;
    border-radius: 8px;
    background-color: v-bind("colorModeStore.colorMode === 'dark' ? colorStore.color.black.lighten[1] : colorStore.color.black.lighten[2]");
    background-clip: content-box;
  }
}

#app {
  background-color: v-bind("colorStore.color.theme.background");
  color: v-bind("colorStore.color.theme.text");
}

main {
  width: min(calc(100vw), 1024px);
  height: calc(100vh - 64px);

  margin: auto;
}

.sub-text {
  color: v-bind("colorStore.color.theme.subText")
}

hr {
  width: 100%;
  height: 1px;
  bottom: 0px;
  margin: 1rem 0px;

  background-color: v-bind("colorStore.color.theme.subText");
  border: none;
}

</style>