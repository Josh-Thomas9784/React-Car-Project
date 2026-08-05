export default function SavedCar({ car, library, setLibrary }) {
    
  const handleRemove = () => {
    const updatedLibrary = library.filter(
      (savedCar) =>
        !(
          savedCar.Make_Name === car.Make_Name &&
          savedCar.Model_Name === car.Model_Name &&
          savedCar.Model_ID === car.Model_ID
        )
    );

    setLibrary(updatedLibrary);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20">
      <div className="mb-4 h-36 overflow-hidden rounded-xl bg-slate-800">
        <img
          key={`${car.Make_Name}-${car.Model_Name}-${car.Model_ID}`}
          data-ci-make={car.Make_Name}
          data-ci-model={car.Model_Name}
          alt={`${car.Make_Name} ${car.Model_Name}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold text-white">
          {car.Make_Name} {car.Model_Name}
        </h2>
        <p className="mt-2 text-sm text-slate-400">{car.Model_ID}</p>
      </div>

      <button
        onClick={handleRemove}
        className="mt-4 rounded-lg bg-red-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
      >
        Remove
      </button>
    </div>
  );
}