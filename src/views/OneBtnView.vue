<template>
    <h1>One Btn</h1>
    <button class="btn-primary" @click="counterStore.setCount(count + 1)" :disabled="count >= max">
        {{ count }}
    </button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { count, max } = storeToRefs(counterStore);
</script>
