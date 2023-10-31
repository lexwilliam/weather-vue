<template>
    <Suspense>
        <WeatherTemperature
            :temp="weatherData?.current.temp_c"
            :city="weatherData?.location.name"
        />
    </Suspense>
    <DropDownContainer
        :isShown="isShown"
        :title="testTitle"
        @toggleShowMode="toggleDropDown"
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
import { RepositoryImpl } from "@/repository/RepositoryImpl";

const route = useRoute();
const repository = new RepositoryImpl()

const testTitle = "Wind Analysis";

const getCurrentData = async () => {
    try {
        const data: Weather = (await repository.getCurrent(`${route.params.cityId}`)).data
        return data;
    } catch (err) {
        return null;
    }
};

const isShown = ref(true);
const toggleDropDown = () => {
    isShown.value = !isShown.value;
    console.log(isShown.value);
};

const weatherData = await getCurrentData();
console.log(weatherData);
</script>
