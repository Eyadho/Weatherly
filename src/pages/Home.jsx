
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import { getCurrentWeather, getForecast } from "../services/weatherApi";

function Home() {
  const [city, setCity] = useState(
    () => localStorage.getItem("weatherly-city") || ""
  );
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatForecast = (forecastList) => {
    const dailyForecast = {};

    forecastList.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      const time = item.dt_txt.split(" ")[1];

      if (!dailyForecast[date] || time === "12:00:00") {
        dailyForecast[date] = {
          date,
          day: new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temperature: Math.round(item.main.temp),
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        };
      }
    });

    return Object.values(dailyForecast).slice(0, 5);
  };

  const handleSearch = async (searchedCity) => {
    const trimmedCity = searchedCity.trim();

    if (!trimmedCity) {
      setError("Please enter a city name.");
      return false;
    }

    setLoading(true);
    setError("");

    try {
      const weatherData = await getCurrentWeather(trimmedCity);
      const forecastData = await getForecast(trimmedCity);

      setCity(trimmedCity);
      localStorage.setItem("weatherly-city", trimmedCity);

      setWeather(weatherData);
      setForecast(formatForecast(forecastData.list));

      return true;
    } catch (error) {
      setWeather(null);
      setForecast([]);

      if (error.message === "City not found") {
        setError("City not found. Please try another city.");
      } else if (error.message === "Weather service is unavailable") {
        setError(
          "Weather service is temporarily unavailable. Please try again."
        );
      } else if (error.message === "Forecast not found") {
        setError("Could not load the forecast for this city.");
      } else if (error.message === "Forecast service is unavailable") {
        setError(
          "Forecast service is temporarily unavailable. Please try again."
        );
      } else {
        setError(
          "Something went wrong. Please check your internet connection."
        );
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, []);

  const getWeatherBackground = () => {
    if (!weather) {
      return "bg-slate-100";
    }

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        return "bg-amber-50";
      case "Clouds":
        return "bg-slate-200";
      case "Rain":
        return "bg-blue-100";
      case "Snow":
        return "bg-cyan-50";
      case "Thunderstorm":
        return "bg-indigo-100";
      default:
        return "bg-slate-100";
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${getWeatherBackground()}`}
    >
      <header className="px-4 pt-10 text-center sm:pt-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Weatherly
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
          Search for a city to discover its current weather and 5-day forecast.
        </p>
      </header>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && (
        <p
          role="status"
          className="mx-4 mt-8 text-center text-sm font-medium text-slate-600"
        >
          Loading weather...
        </p>
      )}

      {error && (
        <p
          role="alert"
          className="mx-4 mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}

      {weather && <WeatherCard weather={weather} />}

      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </main>
  );
}

export default Home;
