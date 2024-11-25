<template>
    <div class="home">
        <h1>{{ count }}</h1>
        <h2>
            The counter is: <span class="text-primary">{{ oddOrEven }}</span>
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
                @click="counterStore.setCount(count - offsetter)"
                :disabled="count - offsetter < min">
                -{{ offsetter }}
            </button>
            <button
                class="btn-primary"
                @click="counterStore.setCount(count + 1)"
                :disabled="count >= max">
                +
            </button>
            <button
                class="btn-primary"
                @click="counterStore.setCount(count + offsetter)"
                :disabled="count + offsetter > max">
                +{{ offsetter }}
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
import { COUNTER_OFFSETTER } from '@/constants/counter-offsetter.const';

const counterStore = useCounterStore();
const { count, max, min, oddOrEven } = storeToRefs(counterStore);
const offsetter = COUNTER_OFFSETTER;
</script>

<style scoped lang="scss">
h1 {
    font-size: offsetter0px;
}
h2 {
    margin-bottom: 1rem;
}
.buttons {
    display: flex;
    gap: 0.3rem;
    justify-content: center;
}
</style>
