import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function CarCard({ car, library, setLibrary, setSelectedCar }) {

  // Don't show anything if no car is selected
  if (!car) return null;
  console.log(car);

  function addToLibrary() {
    const alreadySaved = library.some(
      (item) =>
        item.make === car.Make_Name &&
        item.model === car.Model_Name &&
        item.year === car.Model_ID
    );

    if (!alreadySaved) {
      setLibrary([...library, car]);
    }
  }

  function RemovePopup(){
    setSelectedCar(null);
  }


  return (

    <div className="w-full h-screen flex items-center justify-center absolute bg-black/40 backdrop-blur-md ">
        

        <div className="w-80 rounded-2xl bg-white shadow-lg p-5 z-50 mt-2 relative">

            <div className="absolute top-1 left-2 text-black text-sm cursor-pointer hover:bg-red-500 py-1 rounded-full px-2"><button onClick={RemovePopup}>X</button></div>

            {/* Car Image */}
                <div className="h-48 bg-gray-200 rounded-xl overflow-hidden mt-2">
                    <img
                        key={`${car.Make_Name}-${car.Model_Name}-${car.Model_ID}`}
                        data-ci-make={car.Make_Name}
                        data-ci-model={car.Model_Name}
                        alt={`${car.Make_Name} ${car.Model_Name}`}
                        className="h-full w-full object-cover"
                    />
                </div>


            {/* Car Info */}
            <div className="mt-4">

                <p className="text-2lg font-bold">
                {car.Model_ID} {car.Make_Name}
                </p>

                <h1 className="text-2xl text-gray-600">
                {car.Model_Name}
                </h1>

            </div>


            {/* Save Button */}
            <button
                onClick={addToLibrary}
                className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-white hover:bg-gray-800"
            >
                Add to Library
            </button>

        </div>
    </div>


  );
}