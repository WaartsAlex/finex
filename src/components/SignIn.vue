<script setup>
    import { ref } from 'vue'
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    const email = ref("");
    const password = ref("");

    const emit = defineEmits(["codeUpdate", "closePopup"])

    const auth = getAuth();
    function signIn() {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log("logged in!")
            emit('codeUpdate', true);
            emit('closePopup');
        })
        .catch(() => {
            console.log("couldn't log in...")
            emit('codeUpdate', false);
        });
    }
</script>

<template>
    <div class="fixed z-10 flex items-center justify-center w-full h-full">
        <div class="bg-white px-6 py-3 flex flex-col border-klu-orange border-2">
            <div class="flex justify-between mb-6">
                <h1 class="text-lg bold">Sign in</h1>
                <button class="text-red" @click="emit('closePopup')">x</button>
            </div>
            <form class="flex flex-col">
                <input placeholder="email" v-model="email" class="my-3"/>
                <input placeholder="password" type="password" v-model="password" class="my-3"/>
            </form>
            <button @click="signIn()" class="bg-klu-blue text-white my-3 rounded-lg">log in</button>
        </div>
    </div>
</template>