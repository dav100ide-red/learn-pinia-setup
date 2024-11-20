<template>
    <div class="home">
        <h1>{{ counterStore.count }}</h1>
        <h2>
            The counter is: <span>{{ counterStore.oddOrEven }}</span>
        </h2>
        <div class="buttons">
            <button class="btn-primary" @click="counterStore.decreaseCount()">-</button>
            <button class="btn-primary" @click="counterStore.decreaseCount(5)">-5</button>
            <button class="btn-primary" @click="counterStore.increaseCount()">+</button>
            <button class="btn-primary" @click="counterStore.increaseCount(5)">+5</button>
        </div>
    </div>
    <hr />
    <MinMaxDisplayer />
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import MinMaxDisplayer from '../components/MinMaxDisplayer.vue';

const counterStore = useCounterStore();
</script>

<style scoped lang="scss">
h1 {
    font-size: 50px;
}
h2 {
    margin-bottom: 1rem;
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
