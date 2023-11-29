<script setup>
import FinexArticle from './FinexArticle.vue'
import { addDoc, collection } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'
const db = useFirestore()

const props = defineProps({
  isAdmin: Boolean,
  Date: (new Date()).toLocaleDateString()
});

const articles = useCollection(collection(db, "Articles"));

function addNewArticle() {
  addDoc(collection(useFirestore(), 'Articles'), {
    Enabled: false
  })
}
</script>

<template>
    <main class="flex flex-col items-center m-6">
      <button class="bg-klu-blue text-white rounded-md px-3" v-if="isAdmin" @click="addNewArticle">Add new article</button>
      <FinexArticle 
        v-for="article in articles" :key="article.id"
        :article="article"
        :isAdmin="props.isAdmin"
        class="my-12"
      />
    </main>
</template>

