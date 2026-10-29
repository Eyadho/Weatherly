
function Forecast({ forecast }) {
  return (
    <section className="mx-auto mt-12 w-full max-w-5xl px-4 pb-16">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-800">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="rounded-2xl border border-white/70 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="font-semibold text-slate-700">
              {day.day}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              className="mx-auto my-3 h-16 w-16"
            />

            <p className="text-3xl font-bold tracking-tight text-slate-900">
              {day.temperature}°
            </p>

            <p className="mt-2 min-h-10 text-sm capitalize text-slate-500">
              {day.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;
