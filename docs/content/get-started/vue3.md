::get-started-page
---
version: 'vue2.7 and Vue3.x'
descriptions: 'In Vue 2.7 and Vue 3 series, you can easily implement it in the following way!'
---

### 1. Install

```cmd
yarn add lib
```

```js{}[@/plugins/swipe-modal.js]
import Vue from 'vue'
import lib from 'lib'
Vue.component('lib', lib)
```

::