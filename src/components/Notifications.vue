<template>
    <div class="notifications">
        <ul>
            <li v-for="(toast, index) in toasts" :key="index" :class="`toast ${toast.status}`">
                <div class="column">
                    <i :class="`fa-solid ${toast.icon}`"></i>
                    <span>{{ toast.text }}</span>
                </div>
                <!-- <i class="fa-solid fa-xmark" @click="removeToast(index)"></i> -->
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { Toast } from '@/types/toast.type';

const toasts: Toast[] = [];
</script>
