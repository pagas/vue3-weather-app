import { shallowMount, VueWrapper } from "@vue/test-utils";
import GetLocation from "./GetLocation.vue";
import { GeolocationServiceKey } from '../symbols';
import type { GeolocationService } from "../types";
import { vi } from 'vitest'

describe("GetLocation", () => {
    it("should render the component without crashing", async (): Promise<void> => {

        const mockGeolocationService: GeolocationService = {
            getCurrentPosition: () => { }
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

    it("displays when geolocation resolved successfully", async (): Promise<void> => {

        const mockGeolocationService: GeolocationService = {
            getCurrentPosition: vi.fn((successCallback: Function) => {
                const position = {
                    coords: {
                        latitude: 51.5074,
                        longitude: -0.1278,
                    },
                };
                successCallback(position);
            })
        };


        const wrapper = await shallowMount(GetLocation, {
            global: {
                provide: {
                    [GeolocationServiceKey as symbol]: mockGeolocationService,
                },
            }
        }) as VueWrapper<typeof GetLocation>;


        expect(wrapper.vm.coords).toEqual({
            latitude: 51.5074,
            longitude: -0.1278,
        });
    });
});