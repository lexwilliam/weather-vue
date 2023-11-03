<template>
    <div class="flex flex-row py-2 gap-4 items-center">
        <BaseCard class="flex flex-col container w-40 text-center gap-2 text-white">
            <i class="fa-solid fa-wind text-6xl py-4"></i>
            <p class="text-4xl">{{ windSpeed }}</p>
            <p class="text-xl">{{ "km/h" }}</p>
        </BaseCard>
        <BaseCard class="flex flex-col container w-40 text-center gap-2 text-white">
            <i class="fa-solid fa-compass text-6xl py-4"></i>
            <p class="text-4xl">{{ windDir }}</p>
        </BaseCard>
        <BaseCard class="flex flex-col container w-40 text-center gap-2 text-white">
            <i class="fa-solid fa-location-arrow text-6xl py-4 "></i>
            <p class="text-4xl">{{ `${windDegree}°` }}</p>
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";

defineProps({
    windSpeed: Number,
    windDir: String,
    windDegree: Number,
});
</script>

<style scoped></style>
