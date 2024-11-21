<template>
    <div class="home">
        <h1>{{ count }}</h1>
        <h2>
            The counter is: <span>{{ oddOrEven }}</span>
        </h2>
        <div class="buttons">
            <button
                class="btn-primary"
                @click="counterStore.setCount(count - 1)"
                :disabled="count <= min">
                -
            </button>
            <button
                class="btn-primary"
                @click="counterStore.setCount(count - 5)"
                :disabled="count - 5 < min">
                -5
            </button>
            <button
                class="btn-primary"
                @click="counterStore.setCount(count + 1)"
                :disabled="count >= max">
                +
            </button>
            <button
                class="btn-primary"
                @click="counterStore.setCount(count + 5)"
                :disabled="count + 5 > max">
                +5
            </button>
        </div>
    </div>
    <hr />
    <MinMaxDisplayer />
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import MinMaxDisplayer from '../components/MinMaxDisplayer.vue';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { count, max, min, oddOrEven } = storeToRefs(counterStore);
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
