import { locationProvider } from "./location-provider.js";

class AddressProvider {
    constructor() {
        this.url = "https://api-adresse.data.gouv.fr";
    }

    async search(query, withGeolocation) {
        const url = this.prepareUrl('/search');
        url.searchParams.set("q", query);

        if (withGeolocation) {
            const position = await locationProvider.getPosition();
            url.searchParams.set("lat", position.lat);
            url.searchParams.set("lon", position.lng);
        }

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            throw e;
        }
    }

    prepareUrl(endpoint) {
        return new URL(this.url + endpoint);
    }
}

export const addressProvider = new AddressProvider();
