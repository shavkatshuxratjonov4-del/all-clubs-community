import Image from "next/image";
import { Event } from "./types";

interface EventCardProps {
  event: Event;
  active?: boolean;
}

export default function EventCard({
  event,
  active = false,
}: EventCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 ${
        active
          ? "scale-100 shadow-2xl shadow-green-500/20"
          : "scale-90 opacity-70"
      }`}
    >
      {/* Event Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 700px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={active}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Club */}
        <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          {event.club}
        </span>

        {/* Title */}
        <h3 className="mt-4 text-3xl font-black text-white">
          {event.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-zinc-400">
          {event.description}
        </p>

        {/* Info */}
        <div className="mt-6 space-y-2 text-sm text-zinc-300">
          <p>📅 {new Date(event.startDate).toLocaleDateString()}</p>
          <p>📍 {event.location}</p>
        </div>

        {/* Button */}
        <button className="mt-8 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700">
          View Details →
        </button>
      </div>
    </div>
  );
}