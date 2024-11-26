<template>
    <div class="notifications">
        <ul>
            <li v-for="(toast, i) in toasts">
                <Notification :toast="toast" @close-toast="deleteToast(i)" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useNotificationsStore } from '@/stores/notifications';
import Notification from './Notification.vue';
import { storeToRefs } from 'pinia';
const notificationsStore = useNotificationsStore();
const { toasts } = storeToRefs(notificationsStore);

function deleteToast(i: number) {
    notificationsStore.deleteToast(i);
}
</script>

<style lang="scss" scoped>
.notifications {
    position: fixed;
    top: 30px;
    right: 20px;

    // Styles for toast and column elements inside notifications
    & :where(.toast, .column) {
        display: flex;
        align-items: center;
    }
    li {
        list-style: none;
    }
}

// Media query for smaller screens
@media screen and (max-width: 530px) {
    .notifications {
        width: 80%;
    }
}
</style>
