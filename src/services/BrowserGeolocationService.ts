export interface GeolocationService {
    getCurrentPosition: (
        successCallback: PositionCallback,
        errorCallback?: PositionErrorCallback,
        options?: PositionOptions
    ) => void;
}

export class BrowserGeolocationService implements GeolocationService {
    getCurrentPosition(
        successCallback: PositionCallback,
        errorCallback?: PositionErrorCallback,
        options?: PositionOptions
    ): void {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    }
}