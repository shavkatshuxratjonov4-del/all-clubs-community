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
            h-56
            md:h-[430px]
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
            left-4
            top-4
            rounded-full
            bg-green-600
            px-3
            py-1.5
            text-[11px]
            font-bold
            uppercase
            tracking-widest
            text-white
            md:left-6
            md:top-6
            md:px-4
            md:py-2
            md:text-xs
          "
        >
          Latest News
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-8">
        <p className="text-sm font-semibold text-green-400">
          {news.club}
        </p>

        <h2
          className="
            mt-3
            text-2xl
            font-black
            leading-tight
            text-white
            md:mt-4
            md:text-4xl
          "
        >
          {news.title}
        </h2>

        <p
          className="
            mt-4
            text-base
            leading-7
            text-zinc-400
            line-clamp-3
            md:mt-6
            md:text-lg
            md:leading-8
            md:line-clamp-none
          "
        >
          {news.excerpt}
        </p>

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            md:mt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
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
              w-full
              rounded-xl
              bg-green-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:scale-105
              hover:bg-green-700
              md:w-auto
              md:px-7
            "
          >
            Maqolani o‘qish →
          </button>
        </div>
      </div>
    </article>
  );
}