::get-started-page
---
version: 'nuxt3'
descriptions: 'In Vue 2.7 and Vue 3 series, you can easily implement it in the following way!'
---
### 1. Install
```cmd
yarn add @takuma-ru/vue-swipe-modal@^4.0.0
```

### 2. Add plugin file
Create a plugins folder and a file named `swipe-modal.ts`.

Write the following code in the file you created.

```ts{1}[@/plugins/swipe-modal.ts]
import swipeModal from '@takuma-ru/vue-swipe-modal'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('swipe-modal', swipeModal)
})
```

### 4. Done!
You can use the `<swipe-modal>` tag in the vue file.

```vue{}[.vue file]
<template>
  <div>
    <button @click="isModal = true">open</button>
    <swipe-modal
      v-model="isModal"
      contents-height="50vh"
      border-top-radius="16px"
    >
      <p>contents</p>
    </swipe-modal>
  </div>
</template>

<script lang="ts" setup>

const isModal = ref(false)

</script>
```
::