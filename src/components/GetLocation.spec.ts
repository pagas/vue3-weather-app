import { shallowMount } from "@vue/test-utils";
import GetLocation from "./GetLocation.vue";
import { GeolocationServiceKey } from '../symbols';
import type { GeolocationService } from "../types";
import { vi } from 'vitest'

describe("GetLocation", () => {
    it("should render the component without crashing", async (): Promise<void> => {

        const mockGeolocationService: GeolocationService = {
            getCurrentPosition: vi.fn().mockImplementation((successCallback, errorCallback) => {
                const mockPosition = {
                    coords: {
                        latitude: 37.7749,
                        longitude: -122.4194,
                        accuracy: 100,
                        altitude: null,
                        altitudeAccuracy: null,
                        heading: null,
                        speed: null
                    },
                    timestamp: Date.now()
                };
                successCallback(mockPosition);
            })
        };

        const wrapper = await shallowMount(GetLocation, {
            global: {
                provide: {
                    [GeolocationServiceKey as symbol]: mockGeolocationService,
                },
            }
        });

        expect(wrapper).toBeTruthy();
    });
});