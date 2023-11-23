<script setup>
  import ExcerciseHeader from './components/ExcerciseHeader.vue'
  import FinexHeader from './components/FinexHeader.vue'
  import FinexNews from './components/FinexNews.vue'
  import FinexAdmin from './components/FinexAdmin.vue'
  import { ref } from 'vue'

  const admin = ref(false);

  function handleCodeUpdate(update) {
    admin.value = update;
  }
</script>

<template>
  <div class="bg-gray">
    {{admin}}
    <ExcerciseHeader class="fixed text-center w-full top-0 p-6"/>
    <FinexHeader @code-update="handleCodeUpdate"/>
    <FinexAdmin v-if="admin"/>
    <FinexNews v-else/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
