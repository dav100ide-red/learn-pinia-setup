<template>
    <form class="min-max-form" @submit.prevent="handleSubmit()">
        <label>
            Min
            <input v-model="form.min" type="number" placeholder="Insert min" required />
        </label>
        <label>
            Max
            <input v-model="form.max" type="number" placeholder="Insert max" required />
        </label>

        <button class="btn-primary" type="submit">Set Min & Max</button>
    </form>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { useNotificationsStore } from '@/stores/notifications';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { max, min, count } = storeToRefs(counterStore);

const notificationsStore = useNotificationsStore();

const form = {
    min: min.value,
    max: max.value,
};

function handleSubmit() {
    const errorMessages = [
        { condition: form.min > form.max, message: 'Min must be smaller than max' },
        { condition: form.min > count.value, message: 'Min must be smaller than count' },
        { condition: form.max < count.value, message: 'Max must be greater than count' },
    ];

    // Controlla e invia il messaggio d'errore se necessario
    const error = errorMessages.find((error) => error.condition);
    if (error) {
        notificationsStore.addToast({ status: 'error', text: error.message });
        return;
    }

    const sameValsAsBefore = form.min === min.value && form.max === max.value;
    if (sameValsAsBefore) {
        notificationsStore.addToast({
            status: 'warning',
            text: 'Please change at least one value',
        });
        return;
    }

    setMinMax();

    notificationsStore.addToast({ status: 'success', text: 'Min & Max updated successfully' });
}

function setMinMax() {
    counterStore.setMax(form.max);
    counterStore.setMin(form.min);
}
</script>

<style lang="scss" scoped>
.min-max-form {
    margin-top: 2rem;
}
</style>
