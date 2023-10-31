import { createRouter, createWebHistory } from "vue-router";
import SearchView from "@/views/search/SearchView.vue";
import WeatherView from "@/views/weather/WeatherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SearchView,
    },
    {
      path: "/weather/:cityId",
      name: "weather",
      component: WeatherView,
    },
  ],
});

export default router;
