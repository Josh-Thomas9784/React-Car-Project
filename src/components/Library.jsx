import SavedCar from "./SavedCar";

export default function Library({ library, setLibrary }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8 bg-slate-950">
      <h1 className="text-3xl font-bold text-white">My Garage</h1>

      {library.length === 0 ? (
         <div className="mt-16 flex flex-col items-center justify-center rounded-2xl py-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your garage is empty
          </h2>

          <p className="mt-2 text-gray-500">
            Search for a car and click <strong>Add to Library</strong> to save it here.
          </p>
        </div>
      ) : (
          <div className="mt-8 flex flex-wrap justify-center gap-6 bg-slate-950">
            {library?.map((car) => (
              <div
                key={`${car.Make_Name}-${car.Model_Name}-${car.Model_ID}`}
                className="w-full max-w-[280px] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <SavedCar car={car} library={library} setLibrary={setLibrary} />
              </div>
            ))}
          </div>

      )}
    
    </div>
  );
}