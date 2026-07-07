import { News } from "../types";

interface SideNewsCardProps {
  news: News;
  active: boolean;
}

export default function SideNewsCard({
  news,
  active,
}: SideNewsCardProps) {
  return (
    <article
      className={`
        overflow-hidden
        rounded-3xl
        border
        bg-zinc-900
        transition-all
        duration-500
        cursor-pointer
        hover:-translate-y-1
        hover:border-green-500/40
        ${
          active
            ? "border-green-500"
            : "border-zinc-800"
        }
      `}
    >
      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={news.image}
          alt={news.title}
          className="
            h-48
            w-full
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="p-5">

        <span className="text-sm font-semibold text-green-400">
          {news.club}
        </span>

        <h3 className="mt-3 line-clamp-2 text-xl font-bold text-white">
          {news.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
          {news.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-xs text-zinc-500">
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>

          <span className="text-sm font-semibold text-green-400">
            →
          </span>

        </div>

      </div>

    </article>
  );
}