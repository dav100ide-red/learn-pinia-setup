<template>
    <div class="about">
        <h1>About</h1>
        <button class="btn-primary" @click="counterStore.increaseCount">
            {{ counterStore.count }}
        </button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
