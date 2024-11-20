<template>
    <div class="home">
        <h1>{{ count }}</h1>
        <div class="buttons">
            <button @click="decreaseCount">-</button>
            <button @click="increaseCount">+</button>
        </div>
    </div>
    <hr />
    <h2>
        The counter is: <span>{{ oddOrEven }}</span>
    </h2>
</template>

<script setup>
import { computed, ref } from 'vue'
const count = ref(0)
const oddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))

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
