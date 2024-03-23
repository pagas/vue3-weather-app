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
  <GetLocation @coordsLoaded="onCoordsLoaded" />
  <WeatherReport v-if="coords" :coords="coords" />
  <div v-else>Loading...</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
