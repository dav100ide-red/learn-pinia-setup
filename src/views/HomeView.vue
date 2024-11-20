<template>
    <div class="home">
        <h1>{{ counterStore.count }}</h1>
        <div class="buttons">
            <button class="btn-primary" @click="counterStore.decreaseCount">-</button>
            <button class="btn-primary" @click="counterStore.increaseCount">+</button>
        </div>
    </div>
    <hr />
    <h2>
        The counter is: <span>{{ counterStore.oddOrEven }}</span>
    </h2>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<style scoped lang="scss">
h1 {
    font-size: 50px;
}
.buttons {
    display: flex;
    gap: 0.3rem;
    justify-content: center;
}
span {
    color: var(--primary);
}
</style>
