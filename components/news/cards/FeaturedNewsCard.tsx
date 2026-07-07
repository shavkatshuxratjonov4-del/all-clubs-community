import { News } from "../types";

interface FeaturedNewsCardProps {
  news: News;
  active: boolean;
}

export default function FeaturedNewsCard({
  news,
  active,
}: FeaturedNewsCardProps) {
  return (
    <article
      className={`
        overflow-hidden
        rounded-3xl
        border
        bg-zinc-900
        transition-all
        duration-500
        hover:border-green-500/50
        ${
          active
            ? "border-green-500 shadow-2xl shadow-green-500/10"
            : "border-zinc-800"
        }
      `}
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={news.image}
          alt={news.title}
          className="
            h-[430px]
            w-full
            object-cover
            transition
            duration-700
            hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <span
          className="
            absolute
            left-6
            top-6
            rounded-full
            bg-green-600
            px-4
            py-2
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white
          "
        >
          Latest News
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-sm font-semibold text-green-400">
          {news.club}
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight text-white">
          {news.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {news.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-sm text-zinc-500">
              {news.author}
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              {new Date(news.publishedAt).toLocaleDateString()}
            </p>

          </div>

          <button
            className="
              rounded-xl
              bg-green-600
              px-7
              py-3
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-green-700
              hover:scale-105
            "
          >
            Maqolani o‘qish →
          </button>

        </div>

      </div>
    </article>
  );
}