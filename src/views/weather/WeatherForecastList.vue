<template>
    <Suspense>
        <div class="flex flex-row gap-4 py-4 overflow-x-scroll w-full text-white">
            <div class="flex flex-row container gap-4">
                <div
                    class="flex flex-col items-center flex-shrink-0"
                    v-for="hour in forecastData?.forecast.forecastday[0].hour"
                    :key="hour.time"
                >
                    <div v-text="`${hour.temp_c}°C`" />
                    <i class="fa-solid fa-cloud text-white text-4xl" />
                    <div v-text="extractHour(hour.time)" />
                </div>
            </div>
        </div>
    </Suspense>
</template>

<script setup lang="ts">
import { TOKENS, container } from "@/di";
import type { WeatherForecast } from "@/model/WeatherForecast";

const props = defineProps({
    cityId: String,
});

const repository = container.get(TOKENS.WeatherRepository)

const extractHour = (time: string) => {
    const regex = /(\d{2}:\d{2})/;
    const match = regex.exec(time);

    if (match && match[1]) {
        return match[1];
    } else {
        return "";
    }
};

const getForecastData = async () => {
    try {
        const data: WeatherForecast = (
            await repository.getForecast(`${props.cityId}`)
        ).data;
        return data;
    } catch (err) {
        return null;
    }
};
const forecastData = await getForecastData();
</script>

<style scoped></style>
@/repository/WeatherRepositoryImpl
