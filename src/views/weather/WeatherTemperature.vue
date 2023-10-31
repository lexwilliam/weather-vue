<template>
    <div class="flex flex-col text-center py-8 gap-4">
        <h2 v-text="props.city" class="text-white text-4xl"></h2>
        <i class="fa-solid fa-cloud text-white text-9xl"></i>
        <p v-text="formattedTemp" class="text-white text-7xl"></p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    temp: {
        type: Number,
        default: 0,
    },
    city: {
        type: String,
        default: "",
    },
});
const formattedTemp = `${Math.round(props.temp)}°C`;
</script>
