<script setup>
// import FinexArticle from './FinexArticle.vue'
import { collection } from 'firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'
const db = useFirestore()

const articles = useCollection(collection(db, "Articles"));
</script>

<template>
    <main>
      <FinexArticle v-for="article in articles" :key="article.id"/>
      {{articles}}
    </main>
</template>

