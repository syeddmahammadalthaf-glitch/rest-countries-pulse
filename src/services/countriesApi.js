/**
 * REST API Client Service for Global Country Intelligence
 * Uses environment variable VITE_API_BASE_URL for configurable API endpoints.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://restcountries.com/v3.1';

export async function fetchAllCountries() {
  const fields = 'name,cca3,capital,region,subregion,population,flags,languages,currencies,maps,borders';
  const url = `${BASE_URL}/all?fields=${fields}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`REST API Error: ${response.status} (${response.statusText})`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Malformed REST API response format.');
  }

  return data;
}
