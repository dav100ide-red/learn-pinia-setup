<template>
    <div :class="`toast ${toast.status} ${isHidden ? 'hide' : ''}`">
        <div class="column">
            <i class="fa-solid" :class="getIconByStatus(toast.status)"></i>
            <span>{{ toast.text }}</span>
        </div>
        <i class="fa-solid fa-xmark" @click="hide">X</i>
    </div>
</template>

<script lang="ts" setup>
import { useNotificationsStore } from '@/stores/notifications';
import type { Status, Toast } from '@/types/toast.type';
import { ref } from 'vue';

defineProps<{ toast: Toast }>();
const emit = defineEmits(['close-toast']);
const isHidden = ref(false);
function hide() {
    isHidden.value = true;
    emit('close-toast');
}

function getIconByStatus(status: Status): string {
    const iconMap: Record<Status, string> = {
        error: 'fa-circle-xmark',
        info: 'fa-circle-info',
        warning: 'fa-circle-exclamation',
        success: 'fa-circle-check',
    };
    return iconMap[status];
}
</script>

<style lang="scss" scoped>
// Show toast animation
@keyframes show_toast {
    0% {
        transform: translateX(100%);
    }

    40% {
        transform: translateX(-5%);
    }

    80% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-10%);
    }
}

// Hide toast animation
@keyframes hide_toast {
    0% {
        transform: translateX(-10%);
    }

    40% {
        transform: translateX(0%);
    }

    80% {
        transform: translateX(-5%);
    }

    100% {
        transform: translateX(calc(100% + 20px));
    }
}

.toast {
    width: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    padding: 16px 17px;
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--black);
    justify-content: space-between;
    animation: show_toast 0.3s ease forwards;

    // Icon styles
    .column i {
        font-size: 1.75rem;
    }

    // Span styling
    .column span {
        font-size: 1.07rem;
        margin-left: 12px;
    }

    // Close icon styles
    i:last-child {
        color: #aeb0d7;
        cursor: pointer;

        &:hover {
            color: var(--dark);
        }
    }

    // Status-specific styling
    &.success {
        background-color: var(--success);
        .column i {
            color: var(--success);
        }
    }

    &.error {
        background-color: var(--error);
        .column i {
            color: var(--error);
        }
    }

    &.warning {
        background-color: var(--warning);
        .column i {
            color: var(--warning);
        }
    }

    &.info {
        background-color: var(--info);
        .column i {
            color: var(--info);
        }
    }

    // Hide toast animation
    &.hide {
        animation: hide_toast 0.3s ease forwards;
    }
}

@media screen and (max-width: 530px) {
    .toast {
        width: 100%;
        font-size: 1rem;
        margin-left: 20px;
    }
}
</style>
