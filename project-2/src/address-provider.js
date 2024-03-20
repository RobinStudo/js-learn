class AddressProvider {
    constructor() {
        this.url = "https://api-adresse.data.gouv.fr";
    }

    async search(query) {
        const url = this.prepareUrl('/search');
        url.searchParams.set("q", query);

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            throw e;
        }

        // return fetch(url)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .catch(e => {
        //         throw e;
        //     })
        // ;
    }

    prepareUrl(endpoint) {
        return new URL(this.url + endpoint);
    }
}

export const addressProvider = new AddressProvider();
