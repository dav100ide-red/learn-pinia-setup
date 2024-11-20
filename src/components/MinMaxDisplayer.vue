<template>
    <div class="min-max-displayer">
        <p>
            Minimun Value: <span class="text-primary">{{ min }}</span>
        </p>
        <p>
            Maximun Value: <span class="text-primary">{{ max }}</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

const { max, min } = useCounterStore();
</script>

<style lang="scss" scoped>
.min-max-displayer {
    display: flex;
    align-items: baseline;
    margin-inline: min(3rem, 5vw);
    gap: 3rem;
    padding: 16px;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
}
</style>
