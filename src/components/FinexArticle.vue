<script setup>
import { ref } from 'vue';
import { collection, updateDoc, doc, deleteDoc, Timestamp } from '@firebase/firestore';
import { useFirestore } from 'vuefire';

const props = defineProps({
  article: Object,
  isAdmin: Boolean
});

const editMode = ref(false);
const selectedProfileImage = ref(false);
const selectedImage = ref(false);
const selectedVideo = ref(false);
const newModel = ref({
  Author: props.article.Author ?? "",
  AuthorImage: props.article.AuthorImage ?? "",
  Content: props.article.Content ?? "",
  Date: props.article.Date ?? new Date(),
  Image: props.article.Image ?? "",
  Video: props.article.Video ?? "",
  Likes: props.article.Likes ?? 0,
  Views: props.article.Views ?? 0,
  Enabled: props.article.Enabled ?? false
})

function isValid() {
  if (props.article) {
    if (props.article.Author && props.article.Content && props.article.Date)
      return true;
  }

  return false;
}

function canEdit() {
  return (props.isAdmin && editMode.value);
}

function getImg() {
  if (editMode.value) {
    if (newModel.value.Image == "")
      return "/finex/"
    return newModel.value.Image;
  } 
  return newModel.value.Image ?? "/finex/assets/images/default_user.jpg"; 
}

function getAccountImg() {
  if (newModel.value.AuthorImage == "")
      return "/finex/assets/images/default_user.jpg";

  return newModel.value.AuthorImage ?? "/finex/assets/images/default_user.jpg"; 
}

function getLikes() {
  return props.article.Likes ?? 0;
}

function getViews() {
  return props.article.Views ?? 0;
}

function cancelEdit() {
  newModel.value = {
    Author: props.article.Author,
    AuthorImage: props.article.AuthorImage,
    Content: props.article.Content,
    Date: props.article.Date,
    Image: props.article.Image,
    Video: props.article.Video,
    Likes: props.article.Likes,
    Views: props.article.Views,
    Enabled: props.article.Enabled
  }

  editMode.value = false;
}

async function saveEdit() {
  editMode.value = false;
  const document = doc(collection(useFirestore(), 'Articles'), props.article.id)

  await updateDoc(document, {
    Author: newModel.value.Author,
    AuthorImage: newModel.value.AuthorImage,
    Content: newModel.value.Content,
    Image: newModel.value.Image,
    Video: newModel.value.Video,
    Date: Timestamp.fromDate(new Date(newModel.value.Date)),
    Likes: newModel.value.Likes,
    Views: newModel.value.Views,
    Enabled: newModel.value.Enabled
  });
}

function openAuthorImageSelect() {
  if (canEdit()) {
    selectedProfileImage.value = !selectedProfileImage.value;
  }
}

function openImageSelect() {
  if (canEdit()) {
    selectedImage.value = !selectedImage.value;
  }
}

function openVideoSelect() {
  if (canEdit()) {
    selectedVideo.value = !selectedVideo.value;
  }
}

function toggleEnabled() {
  if (canEdit()) {
    newModel.value.Enabled = !newModel.value.Enabled;
  }
}

function hasImageMedia() {
  return newModel.value.Image && newModel.value.Image != "";
}

function hasVideoMedia() {
  return !hasImageMedia && newModel.value.Video && newModel.value.Video != "";
}

function deleteArticle() {
  deleteDoc(doc(useFirestore(), 'Articles', props.article.id));
}

function getDate() {
  return (new Date(newModel.value.Date)).toLocaleDateString();
}

</script>

<template>
  <div v-if="(isValid() && newModel.Enabled) || isAdmin" class="bg-white w-2/3 flex flex-col items-start p-6 shadow-md">
    <!-- enable/disable -->
    <div 
      v-if="isAdmin"
      class="text-white px-3 rounded-md" 
      :class="{'bg-klu-blue': newModel.Enabled, 'bg-red': !newModel.Enabled}"
      @click="toggleEnabled()"
    >
      <p><span v-if="newModel.Enabled">en</span><span v-else>dis</span>abled</p>
    </div>

    <div class="flex justify-between items-start w-full">
      <div class="flex items-center font-bold mb-6">
        <!-- Profile Picture -->
        <img :src="getAccountImg()" class="rounded-full w-1/12" @click="openAuthorImageSelect()"/> 

        <!-- Profile image url popup -->
        <div v-if="canEdit() && selectedProfileImage" class="fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup">
          <h1>set profile image with url:</h1>
          <input v-model="newModel.AuthorImage" placeholder="image-src"/>
          <img :src="getAccountImg()"/>
          <button class="m-6 bg-klu-blue text-white rounded-sm p-3" @click="selectedProfileImage = !selectedProfileImage">submit</button>
        </div>

        <div class="flex flex-col justify-start items-start">
          <!-- Author -->
          <input v-if="canEdit()" v-model="newModel.Author" class="border-2 border-klu-blue" placeholder="author"/> 
          <p v-else class="text-lg">
            {{article.Author}}
          </p>

          <!-- Date and time -->
          <input v-if="canEdit()" type="date" v-model="newModel.Date" placeholder="date" class="border-2 border-klu-orange"/>
          <p v-else class="text-light-blue">{{getDate()}} </p>
        </div>
      </div>

      <div v-if="editMode && isAdmin">
        <!-- edit buttons -->
        <button 
          class="bg-klu-blue px-3 py-1 rounded-md text-white mx-3" 
          @click="saveEdit()"
        >
          save
        </button>
        <button 
          class="bg-red px-3 py-1 rounded-md text-white" 
          @click="cancelEdit()"
        >
          cancel
        </button>
      </div>

      <div v-if="!editMode && isAdmin">
        <button 
          class="bg-klu-orange px-3 py-1 rounded-md text-white" 
          @click="editMode = true"
        >
          edit
        </button>
        
        <!-- delete button -->
        <button class="bg-red text-white rounded-md px-3 py-1 mx-3" @click="deleteArticle()">delete</button>
      </div>
    </div>

    <!-- content -->
    <textarea v-if="canEdit()" class="border-2 border-klu-blue w-full h-64" v-model="newModel.Content"/>
    <p v-else class="text-dark-gray text-left">
      {{article.Content}}
    </p>

    <div class="flex justify-evenly items-center w-full my-3">
      <button class="bg-klu-blue text-white rounded-md px-3 py-1" v-if="canEdit()" @click="openImageSelect()">set media: image</button>
      <button class="bg-klu-blue text-white rounded-md px-3 py-1" v-if="canEdit()" @click="openVideoSelect()">set media: video</button>
    </div>
    <!-- image -->
    <img v-if="hasImageMedia || canEdit()" :src="newModel.Image"/>

    <!-- image url popup -->
    <div v-if="canEdit() && selectedImage" class="fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup">
      <h1>set image with url:</h1>
      <input v-model="newModel.Image" placeholder="image-src"/>
      <img :src="getImg()" class="max-h-28"/>
      <button class="m-6 bg-klu-blue text-white rounded-sm p-3" @click="selectedImage = !selectedImage">submit</button>
    </div>

    <!-- video -->
    <video v-if="hasVideoMedia" >
      <source :src="newModel.Video">
    </video>

    <!-- video url popup -->
    <div v-if="canEdit() && selectedVideo" class="fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup">
      <h1>set video with url:</h1>
      <input v-model="newModel.Video" placeholder="video-src"/>
      <video width="320" height="240" controls>
        <source :src="newModel.Video">
      </video>
      <button class="m-6 bg-klu-blue text-white rounded-sm p-3" @click="openVideoSelect()">submit</button>
    </div>

    <br/>

    <div class="flex mx-2">
      <p class="mr-6">
        <input v-if="canEdit()" type="number" class="border-2 border-klu-blue w-1/4" v-model="newModel.Likes"/>
        <span v-else> {{getLikes()}} </span> 
        likes
      </p>
      <p>
        <input v-if="canEdit()" type="number" class="border-2 border-klu-blue w-1/4" v-model="newModel.Views"/>
        <span v-else>
          {{getViews()}}
        </span>
        views
      </p>
    </div>
  </div>
</template>

