<script setup>
const props = defineProps({
  isAdmin: Boolean
});

</script><template>
  <header class="bg-white flex flex-col align-center">
    <img src="../assets/images/header_image.jpg" class="w-full" />
      <div class="flex items-end ml-56 max-h-24 mb-6">
        <img src="../assets/images/logo.png" class="rounded-full w-1/6"/>
        <h1 class="text-2xl font-bold ml-5">KLULESS <span v-if="props.isAdmin" class="text-red">ADMIN MODE</span></h1>
      </div>
  </header>
</template>