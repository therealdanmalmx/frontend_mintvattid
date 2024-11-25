import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="h-dvh overflow-hidden bg-slate-200 bg-opacity-90 bg-laundry-room bg-cover bg-center bg-blend-overlay">
      <div className="container mx-auto flex h-full flex-col justify-between px-4 py-12 text-center md:justify-center">
        <div className="space-y-8">
          <img
            src="/src/assets/img/tvattid_logo.webp"
            alt="Tvättid logotyp"
            className="mx-auto h-32 md:h-48"
          />
          <h1 className="mt-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:mt-0 md:text-6xl">
            Boka tvättid{" "}
            <span className="block md:inline-block">enkelt och smidigt!</span>
          </h1>
          <p className="mx-2 text-lg text-gray-900 sm:text-xl">
            Effektiv hantering av tvättstugor och tvättider för fastigheter och
            hyresgäster. Slipp pappret och pennan.
          </p>
        </div>
        <div className="bottom-0 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-8">
          <button className="text-wh btn btn-primary btn-wide text-base text-white">
            <Link to="/register">Registrera dig</Link>
          </button>
          <button className="btn btn-outline btn-wide text-base">
            <Link to="/login">Logga in</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
