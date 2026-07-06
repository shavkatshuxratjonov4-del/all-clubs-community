export default function Events() {
  return (
    <section
      id="events"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      {/* Title */}
      <div className="text-center">

        <h2 className="text-5xl font-black">
          Upcoming Events
        </h2>

        <p className="mt-5 text-gray-400">
          Stay updated with upcoming activities from all clubs.
        </p>

      </div>

      {/* Empty State */}
      <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-16 text-center">

        {/* Calendar Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-zinc-800 text-5xl">
          📅
        </div>

        <h3 className="mt-8 text-3xl font-bold">
          No Upcoming Events
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          There are currently no scheduled events.
          New events will automatically appear here
          when they are published by the administrator.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200">
          Explore Clubs
        </button>

      </div>
    </section>
  );
}