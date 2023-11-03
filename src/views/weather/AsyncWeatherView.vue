<template>
    <Suspense>
        <WeatherTemperature
            :temp="weatherData?.current.temp_c"
            :city="weatherData?.location.name"
        />
    </Suspense>
    <div class="container flex justify-center text-white">
        <div
            class="flex flex-row bg-secondary rounded-2xl items-center gap-4 py-2 px-5 duration-150 cursor-pointer"
            @click="onSaveCityClicked"
        >
            <i
                class="fa-solid fa-plus text-xl hover:text-secondary duration-150 cursor-pointer"
            ></i>
            <p v-text="`Save this city`"></p>
        </div>
    </div>
    <DropDownContainer
        :is-shown="isForecastShown"
        :title="forecastTitle"
        @toggle-show-mode="toggleForecastDropDown"
    >
        <WeatherForecastList :city-id="cityId" />
    </DropDownContainer>
    <DropDownContainer
        :is-shown="isWindShown"
        :title="windTitle"
        @toggle-show-mode="toggleWindDropDown"
    >
        <WindAnalysisList
            :windSpeed="weatherData?.current.wind_kph"
            :windDegree="weatherData?.current.wind_degree"
            :windDir="weatherData?.current.wind_dir"
        />
    </DropDownContainer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Weather } from "@/model/Weather";
import WeatherTemperature from "./WeatherTemperature.vue";
import DropDownContainer from "@/components/DropDownContainer.vue";
import { ref } from "vue";
import WindAnalysisList from "./WindAnalysisList.vue";
import WeatherForecastList from "./WeatherForecastList.vue";
import { FirestoreLocation } from "@/model/FirestoreLocation";
import { TOKENS, container } from "@/di";

const route = useRoute();
const cityId = `${route.params.cityId}`;
const weatherRepo = container.get(TOKENS.WeatherRepository);
const locationRepo = container.get(TOKENS.LocationRepository);

// State
const windTitle = "Wind Analysis";
const forecastTitle = "24-hr Forecast";
const isWindShown = ref(true);
const isForecastShown = ref(true);

// Event
const toggleWindDropDown = () => {
    isWindShown.value = !isWindShown.value;
};
const toggleForecastDropDown = () => {
    isForecastShown.value = !isForecastShown.value;
};
const onSaveCityClicked = () => {
    const cityName = weatherData?.location.name;
    if (cityName != null) {
        const location = new FirestoreLocation(cityId, cityName);
        locationRepo.insertLocation(location);
    }
};

// Data From Repository
const getCurrentData = async () => {
    try {
        const data: Weather = (await weatherRepo.getCurrent(cityId)).data;
        return data;
    } catch (err) {
        return null;
    }
};

// Data
const weatherData = await getCurrentData();
</script>
