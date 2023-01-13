::get-started-page
---
version: 'vue2'
descriptions: 'In Vue 2.7 and Vue 3 series, you can easily implement it in the following way!'
---

### 1. Install

```cmd
yarn add lib @vue/composition-api
```

```js{}[@/plugins/swipe-modal.js]
import Vue from 'vue'
import lib from 'lib'
Vue.component('lib', lib)
```

::