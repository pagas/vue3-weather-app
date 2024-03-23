<script setup lang="ts">
import GetLocation from './components/GetLocation.vue';
import WeatherReport from './components/WeatherReport.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Coords } from './types';

const coords: Ref<Coords | undefined> = ref();

const onCoordsLoaded = (_coords: Coords) => {
  coords.value = _coords;
};

</script>

<template>
  <div
    class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-full h-screen flex flex-col items-center justify-center">
    <GetLocation @coordsLoaded="onCoordsLoaded" />
    <WeatherReport v-if="coords" :coords="coords" />
    <div v-else>Loading coordinates...</div>
  </div>

</template>

<style scoped></style>
