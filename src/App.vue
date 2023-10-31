<template>
  <div class="flex flex-col min-h-screen font-Poppins bg-primary">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>
