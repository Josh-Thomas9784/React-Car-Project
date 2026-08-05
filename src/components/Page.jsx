import car from "../assets/car.jpg";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <section className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <img
            src={car}
            alt="Sleek car"
            className="w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/10"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <span className="inline-flex rounded-full bg-indigo-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Premium Collection
          </span>

          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              The cars you love
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Discover a curated selection of performance vehicles matched to your style. Tap through to learn more about features, trims, and pricing.
            </p>
          </div>

          <Link
            to='/List'
            className="inline-flex w-fit rounded-full bg-indigo-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            View models
          </Link>
        </div>
      </div>
    </section>
  );
}
