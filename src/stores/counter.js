import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const state = reactive({ count: 0, min: -15, max: 30 });
    // const count = ref(0);
    // const min = ref(-15);
    // const max = ref(30);

    function setCount(amount = 1) {
        if (amount <= state.max && amount >= state.min) {
            state.count = amount;
        }
    }

    // function decreaseCount(decreaseAmount = 1) {
    //     if (state.count - decreaseAmount >= state.min) {
    //         state.count = state.count - decreaseAmount;
    //     }
    // }

    //computed
    const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));
    const count = computed(() => state.count);
    const min = computed(() => state.min);
    const max = computed(() => state.max);

    return {
        //STATE
        count,
        min,
        max,
        oddOrEven,

        setCount,
        //decreaseCount,
    };
});
