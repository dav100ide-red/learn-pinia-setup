import type { NotificationsState } from '@/types/notifications-state.type';
import type { Toast } from '@/types/toast.type';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useNotificationsStore = defineStore('notifications', () => {
    const state = reactive<NotificationsState>({
        toasts: [],
    });

    const toasts = computed<Toast[]>(() => state.toasts);

    return {
        toasts,
    };
});
