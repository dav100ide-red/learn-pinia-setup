import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const state = reactive({ count: 0, min: -15, max: 30 });

    function setCount(amount = 1) {
        if (amount <= state.max && amount >= state.min) {
            state.count = amount;
        }
    }

    //computed, refac andrea
    const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));
    const count = computed(() => state.count);
    const min = computed(() => state.min);
    const max = computed(() => state.max);

    return {
        count,

        min,
        max,
        oddOrEven,

        setCount,
    };
});
