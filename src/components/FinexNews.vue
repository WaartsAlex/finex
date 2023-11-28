<script setup>
import FinexArticle from './FinexArticle.vue'
import { collection } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'
const db = useFirestore()

const props = defineProps({
  isAdmin: Boolean
});

const articles = useCollection(collection(db, "Articles"));
</script>

<template>
    <main class="flex flex-col items-center m-6">
      <FinexArticle 
        v-for="article in articles" :key="article.id"
        :article="article"
        :isAdmin="props.isAdmin"
        class="my-12"
      />
    </main>
</template>

