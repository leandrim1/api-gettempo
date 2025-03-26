import axios from "axios";

const api = axios.create({
    baseURL: 'https://apitreinotempo.up.railway.app/WeatherForecast/GetTempo',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;