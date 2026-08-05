import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Searchbar({ setSelectedCar }) {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getCars() {
      const response = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/*?format=json"
      );

      const data = await response.json();
      setCars(data.Results || []);
    }

    getCars();
  }, []);

  function handleSearch(value) {
    const trimmedValue = value.trim();
    setQuery(value);

    if (!trimmedValue) {
      setResults([]);
      return;
    }

    const filtered = cars.filter((car) =>
      car.Model_Name?.toLowerCase().includes(trimmedValue.toLowerCase())
    );

    setResults(filtered.slice(0, 8));
  }

  function handleSelect(car) {
    setSelectedCar(car);
    setQuery(car.Model_Name);
    setResults([]);
  }

  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <Link
          to="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-white transition hover:bg-white/20"
        >
          ←
        </Link>

        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for a car model..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 sm:text-base"
          />

          {query.trim() && results.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/30">
              {results.map((car) => (
                <button
                  key={car.Model_ID}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(car)}
                >
                  {car.Model_Name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}