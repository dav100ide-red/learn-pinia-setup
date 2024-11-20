<template>
    <div class="app">
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
const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Min & Max', path: '/min-max' },
]
</script>

<style scoped>
.app {
    text-align: center;
}
</style>
