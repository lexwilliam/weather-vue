<template>
    <div class="container flex flex-col px-2 py-2">
        <div class="container flex flex-row items-center gap-4">
            <p v-text="props.title" class="text-white text-2xl"></p>
            <div
                class="flex text-white flex-1 justify-end"
                @click="$emit('toggleShowMode')"
            >
                <i v-if="isShown" class="fa-solid fa-chevron-up"></i>
                <i v-else class="fa-solid fa-chevron-down"></i>
            </div>
        </div>
        <div v-if="isShown">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(["toggleShowMode"]);
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    isShown: {
        type: Boolean,
        default: true,
    },
});
</script>
