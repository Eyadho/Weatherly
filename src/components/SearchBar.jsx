import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
  const trimmedCity = city.trim()
  if (!trimmedCity || loading) {
    return;
  }
  const success = await onSearch(trimmedCity);
  if (success){
    setCity("")
  }
}

  return (
    <div className="mt-10 flex justify-center px-4">
      <div className="flex w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 focus-within:shadow-lg">
        <div className="flex flex-1 items-center">
          <svg
            className="ml-5 h-5 w-5 shrink-0 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>

          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !loading) {
                handleSearch();
              }
            }}
            placeholder="Search for a city..."
            className="w-full bg-transparent px-4 py-4 text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 px-6 py-4 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>

          <span>{loading ? "Searching..." : "Search"}</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
