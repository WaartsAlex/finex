<script setup>
  import ExcerciseHeader from './components/ExcerciseHeader.vue'
  import FinexHeader from './components/FinexHeader.vue'
  import FinexNews from './components/FinexNews.vue'
  import FinexAdmin from './components/FinexAdmin.vue'
  import SignIn from './components/SignIn.vue'
  import { ref } from 'vue'
  import { getAuth, signOut } from "firebase/auth";
  
  const auth = getAuth();

  const admin = ref(auth.currentUser != null);
  const showPopup = ref(false);

  function handleCodeUpdate(update) {
    admin.value = update;
  }

  function logout() {
    signOut(auth).then(() => {
      admin.value = false;
    }).catch((error) => {
      console.log("tried to logout but failed...");
      console.log(error);
    });
  }
</script>

<template>
  <div class="bg-gray">
    <button 
      v-if="admin" 
      class="bg-red text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-blue" 
      @click="logout">
      Sign out
    </button>
    <button 
      v-else 
      class="bg-klu-blue text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-orange" 
      @click="showPopup = true"
    >
      Sign in
    </button>

    <SignIn v-if="showPopup" @code-update="handleCodeUpdate" @closePopup="showPopup = false"/>

    <ExcerciseHeader class="fixed text-center w-full top-0 p-6"/>
    <FinexHeader :isAdmin="admin"/>
    <FinexAdmin v-if="admin"/>
    <FinexNews :isAdmin="admin"/>
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
