import type { CounterState } from '@/types/counter.type';
import http from '../api';
import type { APIResponse } from '../types';

async function getCounter() {
    return await http.get<APIResponse<CounterState>>('counter');
}

async function setCounter(counter: CounterState) {
    return await http.put<CounterState>('counter', counter);
}

export default {
    getCounter,
    setCounter,
};
