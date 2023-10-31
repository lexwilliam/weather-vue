<template>
    <Suspense>
        <AsyncWeatherView />
        <template #fallback>
            <p>Loading...</p>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import AsyncWeatherView from './AsyncWeatherView.vue';


</script>