
function WeatherCard({ weather }) {
  return (
    <div className="mx-auto mt-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* City information */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            {weather.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {weather.sys.country}
          </p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="h-20 w-20"
        />
      </div>

      {/* Main temperature */}
      <div className="mt-6 text-center">
        <h3 className="text-7xl font-bold tracking-tight text-slate-900">
          {Math.round(weather.main.temp)}°
        </h3>

        <p className="mt-3 text-lg capitalize text-slate-500">
          {weather.weather[0].description}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          H: {Math.round(weather.main.temp_max)}° · L:{" "}
          {Math.round(weather.main.temp_min)}°
        </p>
      </div>

      {/* Additional weather information */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        {/* Feels like */}
        <div className="rounded-2xl bg-slate-50 p-3 text-center transition-colors hover:bg-slate-100">
          <span
            className="text-xl"
            role="img"
            aria-label="Temperature"
          >
            🌡️
          </span>

          <p className="mt-2 text-xs text-slate-500">Feels like</p>

          <p className="mt-1 text-lg font-semibold text-slate-800">
            {Math.round(weather.main.feels_like)}°
          </p>
        </div>

        {/* Humidity */}
        <div className="rounded-2xl bg-slate-50 p-3 text-center transition-colors hover:bg-slate-100">
          <span
            className="text-xl"
            role="img"
            aria-label="Humidity"
          >
            💧
          </span>

          <p className="mt-2 text-xs text-slate-500">Humidity</p>

          <p className="mt-1 text-lg font-semibold text-slate-800">
            {weather.main.humidity}%
          </p>
        </div>

        {/* Wind speed */}
        <div className="rounded-2xl bg-slate-50 p-3 text-center transition-colors hover:bg-slate-100">
          <span
            className="text-xl"
            role="img"
            aria-label="Wind"
          >
            💨
          </span>

          <p className="mt-2 text-xs text-slate-500">Wind</p>

          <p className="mt-1 text-lg font-semibold text-slate-800">
            {weather.wind.speed} m/s
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;