<template>
    <Toast />
    <div class="text-center">
        <nav>
            <span v-for="(link, index) in links" :key="index">
                <RouterLink :to="link.path">{{ link.label }}</RouterLink>
                <span v-if="index < links.length - 1"> | </span>
            </span>
        </nav>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();
counterStore.fetchCounterState();

const links = [
    { label: 'Home', path: '/' },
    { label: 'One Btn', path: '/one-btn' },
    { label: 'Min & Max', path: '/min-max' },
];
</script>

<style scoped>
nav {
    margin-bottom: 1rem;
}
</style>
