import { AddressSearchComponent } from "./src/address-search-component.js";

const addressSearchComponents = document.getElementsByClassName("address-search-component");
for (const component of addressSearchComponents) {
    new AddressSearchComponent(component);
}
