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
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { max, min, count } = storeToRefs(counterStore);
import { useToast } from 'primevue';
const toast = useToast();

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
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
        return;
    }

    const sameValsAsBefore = form.min === min.value && form.max === max.value;
    if (sameValsAsBefore) {
        toast.add({
            severity: 'warn',
            summary: 'Warning',
            detail: 'Please change at least one value',
            life: 3000,
        });
        return;
    }

    counterStore.setMaxMin(form.max, form.min);

    toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Min & Max updated successfully',
        life: 3000,
    });
}
</script>

<style lang="scss" scoped>
.min-max-form {
    margin-top: 2rem;
}
</style>
