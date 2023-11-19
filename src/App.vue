<template>
  <div>
    <excerciseHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ExcerciseHeader from './components/ExcerciseHeader.vue'

export default {
  name: 'App',
  components: {
    ExcerciseHeader
  }
}
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
