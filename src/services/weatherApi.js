const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getCurrentWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (response.status === 404) {
        throw new Error("City not found");
    }

    if (!response.ok) {
        throw new Error("Weather service is unavailable");
    }

    return response.json();
}

export async function getForecast(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (response.status === 404) {
        throw new Error("Forecast not found");
    }

    if (!response.ok) {
        throw new Error("Forecast service is unavailable");
    }

    return response.json();
}
