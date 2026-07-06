export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Badge */}
      <div className="relative mb-8 rounded-full border border-zinc-700 bg-zinc-900/70 px-6 py-2 text-sm text-gray-300 backdrop-blur">
        🚀 Official Student Platform of TDAU
      </div>

      {/* Title */}
      <h1 className="relative max-w-5xl text-6xl font-black leading-tight md:text-8xl">
        All Clubs
        <br />
        Community
      </h1>

      {/* Description */}
      <p className="relative mt-8 max-w-3xl text-xl leading-9 text-gray-400">
        Discover student clubs, join exciting events, build friendships,
        develop leadership skills and become part of the largest student
        community at Tashkent State Agrarian University.
      </p>

      {/* Buttons */}
      <div className="relative mt-12 flex flex-wrap justify-center gap-5">

        <button className="rounded-xl bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-gray-200">
          🚀 Join Community
        </button>

        <button className="rounded-xl border border-white px-8 py-4 transition duration-300 hover:bg-white hover:text-black">
          📅 Explore Events
        </button>

      </div>

    </section>
  );
}