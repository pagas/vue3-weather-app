import type { InjectionKey } from 'vue';
import type { GeolocationService } from "@/types";

export const GeolocationServiceKey: InjectionKey<GeolocationService> = Symbol('GeolocationService');