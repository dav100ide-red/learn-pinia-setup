import { computed, reactive, readonly, ref } from 'vue';
import { defineStore } from 'pinia';
import type { CounterState } from '@/types/counter.type';

// export const useCounterStore = defineStore('counter', () => {
//     //STATE
//     const state = reactive<CounterState>({ count: 0, min: -15, max: 30 });

//     function setCount(amount = 1): void {
//         if (amount <= state.max && amount >= state.min) {
//             state.count = amount;
//         }
//     }

//     function setMax(amount: number) {
//         if (amount > state.min) {
//             state.max = amount;
//         }
//     }

//     function setMin(amount: number) {
//         if (amount < state.max) {
//             state.min = amount;
//         }
//     }

//     const COUNTER_OFFSETTER = readonly(ref(5));

//     const count = computed<number>(() => state.count);
//     const min = computed<number>(() => state.min);
//     const max = computed<number>(() => state.max);

//     const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));

//     return {
//         // esporto solo i computed e NON lo state perche' cosi' ottengo l'one-way data-binding,
//         // poiche' i computed non possono essere riassegnati
//         //mantengo la logica centralizzata nello store
//         count,
//         min,
//         max,

//         oddOrEven,

//         COUNTER_OFFSETTER,

//         setCount,
//         setMax,
//         setMin,
//     };
// });

export const useCounterStore = defineStore('counter', () => {
    // STATE
    const state = reactive<CounterState>({ count: 0, min: -15, max: 30 });

    async function fetchCounterState() {
        try {
            const response = await fetch('http://localhost:3000/counter');
            if (!response.ok) {
                throw new Error('Failed to fetch counter state');
            }
            const data: CounterState = await response.json();
            // Aggiorna lo stato locale con i dati ricevuti dal server
            state.count = data.count;
            state.min = data.min;
            state.max = data.max;
        } catch (error) {
            console.error('Error fetching counter state:', error);
        }
    }

    async function updateCounterState() {
        try {
            const response = await fetch('http://localhost:3000/counter', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    count: state.count,
                    min: state.min,
                    max: state.max,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to update counter state');
            }
        } catch (error) {
            console.error('Error updating counter state:', error);
        }
    }

    function setCount(amount = 1): void {
        if (amount <= state.max && amount >= state.min) {
            state.count = amount;
            updateCounterState(); // Aggiorna il server con il nuovo stato
        }
    }

    function setMaxMin(max: number, min: number) {
        if (max > state.min && min < state.max) {
            state.max = max;
            state.min = min;
            updateCounterState(); // Aggiorna il server con il nuovo stato
        }
    }

    const COUNTER_OFFSETTER = readonly(ref(5));

    const count = computed<number>(() => state.count);
    const min = computed<number>(() => state.min);
    const max = computed<number>(() => state.max);

    const oddOrEven = computed(() => (state.count % 2 === 0 ? 'even' : 'odd'));

    return {
        // Esporta solo i computed e NON lo state per one-way data-binding
        count,
        min,
        max,
        oddOrEven,
        COUNTER_OFFSETTER,

        setCount,
        setMaxMin,
        fetchCounterState, // Metodo per inizializzare i dati dallo stato remoto
    };
});
