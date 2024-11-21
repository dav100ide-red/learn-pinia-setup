import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import { CounterState } from '../types/counter.type';

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const state = reactive<CounterState>({ count: 0, min: -15, max: 30 });

    function setCount(amount = 1) {
        if (amount <= state.max && amount >= state.min) {
            state.count = amount;
        }
    }

    const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));

    const count = computed<number>(() => state.count);
    const min = computed<number>(() => state.min);
    const max = computed<number>(() => state.max);

    return {
        count,
        // esporto solo i computed e NON lo state perche' cosi' ottengo l'one-way data-binding,
        // poiche' i computed non posso riassegnati
        //mantendo la logica centralizzata nello store
        min,
        max,
        oddOrEven,

        setCount,
    };
});
