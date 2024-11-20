import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const count = ref(0)

    //ACTIONS
    function increaseCount(increaseAmount = 1) {
        count.value = count.value + increaseAmount
    }

    function decreaseCount(decreaseAmount = 1) {
        count.value = count.value - decreaseAmount
    }

    //GETTERS
    const oddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'))

    return {
        //STATE
        count,

        //ACTIONS
        increaseCount,
        decreaseCount,

        //GETTERS
        oddOrEven,
    }
})
