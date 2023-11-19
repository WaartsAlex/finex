<template>
    <main>
      <FinexArticle v-for="article in articles" :key="article.id"/>
    </main>
</template>

<script setup>
import FinexArticle from './FinexArticle.vue'
// import {useCollection, useFirestore} from 'vuefire'
// import { collection } from 'firebase/firestore'

</script>
