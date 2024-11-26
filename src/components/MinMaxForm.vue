<template>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <form @submit.prevent="setMinMax()">
        <label>
            Min
            <input v-model="form.min" type="number" />
        </label>
        <label>
            Max
            <input v-model="form.max" type="number" />
        </label>
        <!-- Error message -->

        <button class="btn-primary" type="submit">Confirm</button>
    </form>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

// Access the Pinia store
const counterStore = useCounterStore();
const { max, min } = storeToRefs(counterStore);

const form = {
    min: min.value,
    max: max.value,
};

function setMinMax() {
    if (form.min > form.max) {
        errorMessage.value = 'Min must be greater than Max!';
        return;
    }
    counterStore.setMax(form.max);
    counterStore.setMin(form.min);
}

const errorMessage = ref('test jad spodsajiadsio');
</script>

<style lang="scss">
.error {
    position: fixed;
    top: 3rem;
    left: 50%;
    translate: -50%;
    color: red;
    font-size: 0.9rem;
}
</style>
