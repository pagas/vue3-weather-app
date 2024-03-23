export type Coords = { latitude: number; longitude: number };
export interface GeolocationService {
    getCurrentPosition: (
        successCallback: PositionCallback,
        errorCallback?: PositionErrorCallback,
        options?: PositionOptions
    ) => void;
}