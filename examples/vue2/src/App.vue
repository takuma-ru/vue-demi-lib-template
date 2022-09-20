<template>
  <div id="app">
    <h3>{{ msg }}</h3>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <lib v-model="model"></lib>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import lib from '../../../packages/lib/src/main'

const msg = ref('vue2.7')
const model = ref(false)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
