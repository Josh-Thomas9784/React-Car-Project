import car from "../assets/car.jpg";
import car2 from "../assets/bg-removed-car.png"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src={car}
        alt="Car Picture"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <img src={car2} alt="" className="absolute inset-0 h-full w-full object-cover z-5"/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase z-4 absolute mb-80">
          Find the Car
        </h1>

        <h2 className=" text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-semibold tracking-widest uppercase z-6 absolute mt-80">
          For You
        </h2>

      </div>

    </section>
  );
}