::get-started-page
---
version: 'nuxt2'
descriptions: 'With nuxt2.x, there are several settings that need to be made.'
---
### 1. Install
This library works with `@vue-composition-api`, so it should be installed together.

```cmd
yarn add lib @vue/composition-api
```

### 2. Add plugin file
Create a plugins folder and a file named `lib.js`.

Write the following code in the file you created.

```js{1}[@/plugins/lib.js]
import Vue from 'vue'
import lib from 'lib'

Vue.component('lib', lib)
```

### 3. Update nuxt.config
Add the following code to the item named `plugins[]`.


```ts{}[@/nuxt.config.js | .ts]
...

plugins: [
  { src: '@/plugins/lib.js', mode: 'client' },
],

...
```

### 4. Done!
You can use the `<lib>` tag in the vue file.

::alert
---
type: warn
---
Make sure to add the `<no-ssr>` tag at that time.
::

```vue{}[.vue file]
<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props) {
    const isModal = ref(true)

    return { isModal }
  },
})
</script>
```

::