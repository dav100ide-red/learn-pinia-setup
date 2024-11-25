<template>
    <form>
        <label>
            Min
            <input type="number" :value="min" />
        </label>
        <label>
            Max
            <input type="number" :value="max" />
        </label>

        <button class="btn-primary" type="submit">Confirm</button>
    </form>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { max, min } = storeToRefs(counterStore);
</script>

<style lang="scss"></style>
