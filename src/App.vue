<template>
  <div>
    <ExcerciseHeader/>
    <FinexHeader />
    <FinexNews />
  </div>
</template>

<script>
import ExcerciseHeader from './components/ExcerciseHeader.vue'
import FinexHeader from './components/FinexHeader.vue'
import FinexNews from './components/FinexNews.vue'

export default {
  name: 'App',
  components: {
    ExcerciseHeader,
    FinexHeader,
    FinexNews
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
