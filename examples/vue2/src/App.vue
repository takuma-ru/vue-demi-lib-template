<template>
  <div>
    <h1>vue 2.7 example</h1>
    <button @click="model = !model">switch v-model</button>
    <lib v-model="model"></lib>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { lib } from '../../../packages/lib/src/main'
import { lib } from '../../../packages/lib/dist/lib.js'

const model = ref(false)
</script>

<style>
</style>
