import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    //STATE
    const count = ref(0)

    //ACTIONS
    function increaseCount() {
        count.value++
    }

    function decreaseCount() {
        count.value--
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
