<template>
  <div>
    {{ msg }}
    <button
      @click="model = !model"
    >
      switch v-model
    </button>
    <LibTest :model-value="model">
      text
    </LibTest>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const msg = ref('hello')
    const model = ref(true)

    return {
      msg,
      model
    }
  }
})
</script>
