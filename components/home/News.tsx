import NewsCarousel from "@/components/news/NewsCarousel";

export default function News() {
  return (
    <section
      id="news"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-400">
          Latest News
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Latest Club News
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Stay updated with the latest activities, achievements and
          announcements from every student club at Tashkent State Agrarian
          University.
        </p>

      </div>

      {/* Carousel */}

      <div className="mt-20">
        <NewsCarousel />
      </div>

    </section>
  );
}