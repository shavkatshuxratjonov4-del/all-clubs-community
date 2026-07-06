export default function Clubs() {
  return (
    <section
      id="clubs"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-5xl font-black">
          Our Clubs
        </h2>

        <p className="mt-5 text-gray-400">
          Choose your community and start your journey today.
        </p>
      </div>

      {/* Clubs */}
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

        {/* Eco Club */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/20">
          <div className="text-5xl">🌿</div>

          <h3 className="mt-4 text-2xl font-bold">
            Eco Club
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Environmental projects and sustainability.
          </p>

          <button className="mt-5 rounded-lg bg-green-600 px-5 py-2 transition hover:bg-green-700">
            Learn More
          </button>
        </div>

        {/* Travel Club */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
          <div className="text-5xl">✈️</div>

          <h3 className="mt-4 text-2xl font-bold">
            Travel Club
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Explore Uzbekistan with students.
          </p>

          <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* Debate Club */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20">
          <div className="text-5xl">🎤</div>

          <h3 className="mt-4 text-2xl font-bold">
            Debate Club
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Improve speaking and leadership skills.
          </p>

          <button className="mt-5 rounded-lg bg-purple-600 px-5 py-2 transition hover:bg-purple-700">
            Learn More
          </button>
        </div>

        {/* Movie Night */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20">
          <div className="text-5xl">🎬</div>

          <h3 className="mt-4 text-2xl font-bold">
            Movie Night
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Watch movies and enjoy together.
          </p>

          <button className="mt-5 rounded-lg bg-red-600 px-5 py-2 transition hover:bg-red-700">
            Learn More
          </button>
        </div>

        {/* Chill Club */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/20">
          <div className="text-5xl">😎</div>

          <h3 className="mt-4 text-2xl font-bold">
            Chill Club
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Relax, play games and meet friends.
          </p>

          <button className="mt-5 rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-600">
            Learn More
          </button>
        </div>

        {/* Media Club */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20">
          <div className="text-5xl">📸</div>

          <h3 className="mt-4 text-2xl font-bold">
            Media Club
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Create photos, videos, social media content and develop creative media skills.
          </p>

          <button className="mt-5 rounded-lg bg-cyan-600 px-5 py-2 transition hover:bg-cyan-700">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}