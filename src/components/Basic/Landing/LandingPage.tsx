export default function LandingPage() {
  return (
    <div className="bg-laundry-room h-dvh overflow-hidden bg-slate-200 bg-opacity-90 bg-cover bg-center bg-blend-overlay">
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Boka tvättid enkelt och smidigt!
          </h1>
          <p className="mb-8 text-lg text-gray-900 sm:text-xl">
            Effektiv hantering av tvättstugor och tvättider för fastigheter och
            hyresgäster.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn btn-primary btn-wide text-base">
              <a href="/register">Registrera dig</a>
            </button>
            <button className="btn btn-outline btn-wide text-base">
              <a href="/login">Logga in</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
