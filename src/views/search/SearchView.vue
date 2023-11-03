<template>
    <main class="container text-white">
        <div class="pt-4 mb-8 relative">
            <input
                type="text"
                v-model="searchQuery"
                @input="getSearchResults"
                placeholder="Search for a city or state"
                class="py-2 px-1 w-full bg-transparent border-b focus:border-secondary focus:outline-none focus:shadow-[0px_1px_0_0#004E71]"
            />
            <ul
                class="absolute bg-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
                v-if="locationSearchResults"
            >
                <li
                    v-for="searchResult in locationSearchResults"
                    :key="searchResult.id"
                    class="px-2 py-2 cursor-pointer"
                    @click="navToWeather(searchResult)"
                >
                    {{ searchResult.name + ", " + searchResult.country }}
                </li>
            </ul>
        </div>
        <Suspense>
            <SavedLocationList />
        </Suspense>
    </main>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Location } from "@/model/Location";
import { useRouter } from "vue-router";
import { container, TOKENS } from "@/di";
import SavedLocationList from "./SavedLocationList.vue";

const weatherRepo = container.get(TOKENS.WeatherRepository)

const searchQuery = ref("");
const queryTimeout: Ref<number | null> = ref(null);
const locationSearchResults: Ref<Location[] | null> = ref(null);

const getSearchResults = () => {
    if (queryTimeout.value != null) {
        clearTimeout(queryTimeout.value);
    }
    queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value != "") {
            const data: Location[] = (
                await weatherRepo.getSearch(searchQuery.value)
            ).data;
            locationSearchResults.value = data;
        } else {
            locationSearchResults.value = null;
        }
    }, 300);
};

const router = useRouter();
const navToWeather = (location: Location) => {
    router.push({
        name: "weather",
        params: { cityId: location.id },
        query: {
            lat: location.lat,
            lon: location.lon,
        },
    });
};
</script>
@/repository/WeatherRepositoryImpl
