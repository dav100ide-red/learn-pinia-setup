import { computed, reactive, readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import type { CounterState } from '@/types/counter.type';

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const state = reactive<CounterState>({ count: 0, min: -15, max: 30 });

    function setCount(amount = 1): void {
        if (amount <= state.max && amount >= state.min) {
            state.count = amount;
        }
    }

    function setMax(amount: number) {
        if (amount > state.min) {
            state.max = amount;
        }
    }

    function setMin(amount: number) {
        if (amount < state.max) {
            state.min = amount;
        }
    }

    const COUNTER_OFFSETTER = readonly(ref(5));

    const count = computed<number>(() => state.count);
    const min = computed<number>(() => state.min);
    const max = computed<number>(() => state.max);

    const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));

    return {
        // esporto solo i computed e NON lo state perche' cosi' ottengo l'one-way data-binding,
        // poiche' i computed non possono essere riassegnati
        //mantengo la logica centralizzata nello store
        count,
        min,
        max,

        oddOrEven,

        COUNTER_OFFSETTER,

        setCount,
    };
});
