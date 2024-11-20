<template>
    <div class="home">
        <h1>{{ count }}</h1>
        <div class="buttons">
            <button @click="decreaseCount">-</button>
            <button @click="increaseCount">+</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

function increaseCount() {
    count.value++
}

function decreaseCount() {
    count.value--
}
</script>

<style scoped lang="scss">
h1,
button {
    font-size: 50px;
}
</style>
