<template>
    <div class="about">
        <h1>About</h1>
        <button
            class="btn-primary"
            @click="counterStore.setCount(count + 1)"
            :disabled="count >= max">
            {{ count }}
        </button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { count, max } = storeToRefs(counterStore);
</script>
