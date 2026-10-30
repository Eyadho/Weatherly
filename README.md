# 🌤️ Weatherly

A responsive weather application built with **React**, **Vite**, and **Tailwind CSS**. Search for any city to explore its current weather conditions and 5-day forecast.

## ✨ Features

- 🔍 Search for weather by city name.
- 🌡️ Display current temperature and weather conditions.
- 💧 Show humidity, wind speed, and feels-like temperature.
- 📅 Display a 5-day weather forecast.
- 🎨 Dynamic background colors based on weather conditions.
- 💾 Remember the last searched city using local storage.
- 📱 Responsive design for desktop and mobile devices.
- ⚠️ Handle invalid city names and API errors.

## 🛠️ Built With

- React
- Vite
- Tailwind CSS
- JavaScript
- OpenWeather API

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd weatherly
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up your API key

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your API key from [OpenWeather](https://openweathermap.org/api).

### 5. Start the development server

```bash
npm run dev
```

## 🔑 API

Weatherly uses the [OpenWeather API](https://openweathermap.org/api) to retrieve current weather data and 5-day forecasts.

## 📁 Project Structure

```text
weatherly/
├── public/
├── src/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 👩‍💻 Author

Your Name

---

**Weatherly** — Stay updated with the weather, wherever you are! 🌍
