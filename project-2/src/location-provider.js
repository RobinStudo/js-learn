class LocationProvider {
    getPosition () {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(location => {
                resolve({
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                });
            });
        });
    }
}

export const locationProvider = new LocationProvider();
