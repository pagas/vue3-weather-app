<script setup lang="ts">
const emit = defineEmits(['coordsLoaded'])

import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { Coords } from "../types";

const coords: Ref<Coords | undefined> = ref();

const geolocationBlockedByUser: Ref<boolean> = ref(false);
const getGeolocation = (): Promise<Coords> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position: { coords: Coords }) => {
                coords.value = position.coords;
                resolve(position.coords);
            },
            (error: { message: string }) => {
                geolocationBlockedByUser.value = true;
                console.error(error.message);
                reject(error.message)
            }
        );
    });
}

onMounted(async () => {
    await getGeolocation();
    emit('coordsLoaded', coords.value);
});

</script>

<template>

    <div v-if="coords && !geolocationBlockedByUser">
        {{ coords.latitude }} {{ coords.longitude }}
    </div>
    <div v-if="geolocationBlockedByUser">User denied access</div>

</template>


<style scoped>
/* Your component's CSS styles go here */
</style>