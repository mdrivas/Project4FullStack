// weatherAPI.js

import { API_KEY } from './config.js';
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeatherData = async (location) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
