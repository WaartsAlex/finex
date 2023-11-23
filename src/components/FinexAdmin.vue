<script setup>
</script>

<template>
    <main>
        <div class="text-red">
            <h1>Admin panel</h1>
            <p class="underline"> All changes to items will be directly processed and pushed! </p>
        </div>
        <div class="flex justify-between mt-6">
            <div id="existing" class="flex flex-col w-full">!!!PUT EXISTING ARTICLES HERE AND MAKE THEM EDITABLE!!!</div>
            <div id="new" class="w-full flex justify-center">
                <div class="fixed border-2 border-klu-orange bg-klu-blue text-white w-1/3">
                    <h1 class="text-2xl">create news article</h1>
                    <form>
                        <input name="title" placeholder="title" class="border-2 border-klu-orange" />
                        <input name="author" placeholder="author" class="border-2 border-klu-orange" />
                        <input name="message" placeholder="message" class="border-2 border-klu-orange" />
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>