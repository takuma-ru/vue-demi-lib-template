<script setup lang="ts">
import { ref } from 'vue';
import { lib } from 'lib'

const model = ref(true)
</script>

<template>
  <div>
    <h1>vue 3 example</h1>
    <button @click="model = !model">v-model switch ({{ model }})</button>
    <lib v-model="model">test</lib>
  </div>
</template>

<style scoped>
</style>
