<script setup>
const props = defineProps({
  title: String,
  message: String,
  author: String,
  image: String
});
</script>

<template>
    <div class="text-white bg-klu-blue m-4 p-4 max-w-3xl">
        <h1 class="text-2xl">{{props.title}}</h1>
        <p>{{props.message}}</p>
        <img v-if="image" :src="props.image" />
        <h2 class="text-lg text-klu-orange">@{{props.author}}</h2>
    </div>
</template>

