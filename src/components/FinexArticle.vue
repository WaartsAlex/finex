<script setup>
const props = defineProps({
  article: Object
  // author: String,
  // authorImage: String,
  // date: Date,
  // time: String,
  // content: String,
  // image: String,
  // video: String, //only available when no image was given
  // likes: Number,
  // views: Number
});

function isValid() {
  if (props.article) {
    if (props.article.Author && props.article.Content && props.article.Date)
      return true;
  }

  return false;
}

function getAccountImg() {
  return props.article.AuthorImage ?? "../assets/images/default_user.jpg"; 
}

function getDateTime() {
  return props.article.Date + (props.article.Time ? " | " + props.article.Time :  "");
}

function getLikes() {
  return props.article.Likes ?? 0;
}

function getViews() {
  return props.article.Views ?? 0;
}

</script>

<template>
  <div v-if="isValid()" class="bg-white w-2/3 flex flex-col items-start p-6">
    <div class="flex items-center font-bold mb-6">
      <img :src="getAccountImg()" class="rounded-full w-1/12"/>
      <div class="flex flex-col justify-start items-start">
        <p class="text-lg">{{article.Author}}</p>
        <p class="text-light-blue">{{getDateTime()}} </p>
      </div>
    </div>

    <p class="text-dark-gray text-left">
      {{article.Content}}
    </p>

    <img v-if="article.Image" :src="article.Image"/>
    <video v-else-if="article.Video"></video>

    <br/>

    <div class="flex mx-2">
      <p class="mr-6">{{getLikes()}} likes</p>
      <p>{{getViews()}} views</p>
    </div>
  </div>
</template>

