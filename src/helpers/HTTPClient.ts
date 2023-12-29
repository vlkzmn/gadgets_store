const BASE_URL = 'https://gadgets-store-api-llc0.onrender.com/';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}
