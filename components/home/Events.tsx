import EventCarousel from "@/components/events/EventCarousel";
import { events } from "@/components/events/eventsData";

export default function Events() {
  const publishedEvents = events.filter(
    (event) => event.status === "published"
  );

  return (
    <section
      id="events"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      {/* Section Header */}
      <div className="text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-400">
          Upcoming Events
        </span>

        <h2 className="mt-6 text-5xl font-black">
          Never Miss An Event
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Discover workshops, competitions, trips and social activities
          organized by all student clubs of Tashkent State Agrarian
          University.
        </p>

      </div>

      {/* Content */}

      <div className="mt-20">

        {publishedEvents.length > 0 ? (

          <EventCarousel />

        ) : (

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 py-24 text-center">

            <div className="text-7xl">
              📅
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              No Upcoming Events
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              There are currently no upcoming events.
              Stay connected with our clubs and check back soon for
              exciting new activities.
            </p>

            <a
              href="#clubs"
              className="mt-10 inline-flex rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-green-700"
            >
              Explore Clubs
            </a>

          </div>

        )}

      </div>

    </section>
  );
}