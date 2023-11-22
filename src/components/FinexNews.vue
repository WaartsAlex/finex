<script setup>
import FinexArticle from './FinexArticle.vue'
import { collection } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'
const db = useFirestore()

const articles = useCollection(collection(db, "Articles"));
</script>

<template>
    <main class="flex flex-col items-center">
      <FinexArticle 
        v-for="article in articles" :key="article.id"
        :title="article.Title"
        :message="article.Message"
        :author="article.Author"
        :image="article.Image"
      />
    </main>
</template>

