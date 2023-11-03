<template>
    <div class="grid grid-cols-2 gap-4">
        <BaseCard
            v-for="location in locationList"
            class="flex flex-row justify-between"
        >
            <p v-text="location.name" class="py-2 px-4 text-2xl" />
            <p v-text="`${location.tempC}°C`" class="order-last py-2 px-4 text-2xl" />
        </BaseCard>
    </div>
</template>

<script setup lang="ts">
import { TOKENS, container } from "@/di";
import BaseCard from "@/components/BaseCard.vue";
import { UISavedLocation } from "./UISavedLocation";

const weatherRepo = container.get(TOKENS.WeatherRepository);
const locationRepo = container.get(TOKENS.LocationRepository);

const getCurrent = async (id: string) => {
    try {
        const current = await weatherRepo.getCurrent(id);
        return current;
    } catch (err) {
        return null;
    }
};

const getLocation = async () => {
    try {
        const location = await locationRepo.getLocation();
        let result: UISavedLocation[] = [];
        location.forEach(async function (value) {
            const tempC = (await getCurrent(value.id))?.data.current.temp_c;
            if (tempC != null) {
                const savedLocation = new UISavedLocation(
                    value.id,
                    value.name,
                    tempC,
                );
                result.push(savedLocation);
            }
        });
        return result;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const locationList: UISavedLocation[] | null = await getLocation();
console.log(locationList);
</script>

<style scoped></style>
