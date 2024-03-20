class AddressProvider {
    constructor() {
        this.url = "https://api-adresse.data.gouv.fr";
    }

    search(query) {
        const url = this.prepareUrl('/search');
        url.searchParams.set("qquery", query);

        return fetch(url)
            .then(response => {
                return response.json();
            })
            .catch(e => {
                console.log(e);
            })
        ;
    }

    prepareUrl(endpoint) {
        return new URL(this.url + endpoint);
    }
}

export const addressProvider = new AddressProvider();
