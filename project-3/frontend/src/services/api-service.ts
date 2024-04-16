class ApiService {
    private readonly url = "http://localhost:3001";

    fetch(endpoint: string): Promise<any> {
        return fetch(this.url + endpoint)
            .then(response => response.json())
        ;
    }
}

export const apiService = new ApiService();
