import { addressProvider } from "./address-provider.js";

export class AddressSearchComponent {
    constructor(container) {
        this.addressProvider = addressProvider;
        this.buildElements(container);
        this.bindEvents();
    }

    buildElements(container) {
        this.elements = {
            container: container,
            searchInput: container.querySelector("input[type='search']"),
            results: container.querySelector("ul"),
        };
    }

    bindEvents() {
        this.elements.searchInput.addEventListener("keyup", () => {
            const query = this.elements.searchInput.value;
            if (query.length < 5 || query === this.lastQuery) {
                return;
            }

            this.lastQuery = query;

            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.run(query);
            }, 500);
        });
    }

     run(query) {
        this.addressProvider.search(query)
            .then(data => {
                this.elements.results.innerHTML = '';
                for (const result of data.features) {
                    const li = document.createElement("li");
                    li.innerText = result.properties.label;
                    this.elements.results.appendChild(li);
                }
            })
        ;
    }
}
