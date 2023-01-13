::get-started-page
---
version: 'nuxt3'
descriptions: 'In Vue 2.7 and Vue 3 series, you can easily implement it in the following way!'
---
### 1. Install
```cmd
yarn add lib
```

### 2. Add plugin file
Create a plugins folder and a file named `lib.ts`.

Write the following code in the file you created.

```ts{1}[@/plugins/lib.ts]
import lib from 'lib'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('lib', lib)
})
```

### 4. Done!
You can use the `<lib>` tag in the vue file.

```vue{}[.vue file]
<template>
  <div>
  </div>
</template>

<script lang="ts" setup>

const isModal = ref(false)

</script>
```
::