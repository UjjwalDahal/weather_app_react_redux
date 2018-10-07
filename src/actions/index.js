import axios from 'axios';

const API_KEY = 'ea70ddf455aa4728b5e91201180710';

const ROOT_URL = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&days=7`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
