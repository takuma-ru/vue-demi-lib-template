<script setup lang="ts">
import { ref } from 'vue';
import { lib } from '../../../packages/lib/src/main'

const model = ref(false)
</script>

<template>
  <div>
    <h1>vue 3 example</h1>
    <button @click="model = !model">v-model switch</button>
    <lib v-model="model"></lib>
  </div>
</template>

<style scoped>
</style>
