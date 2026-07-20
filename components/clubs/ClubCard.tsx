import Image from "next/image";
import Link from "next/link";

import { Club } from "./types";

interface ClubCardProps {
  club: Club;
}

const colors = {
  green: {
    border: "hover:border-green-500",
    shadow: "hover:shadow-green-500/20",
    button: "bg-green-600 hover:bg-green-700",
  },
  blue: {
    border: "hover:border-blue-500",
    shadow: "hover:shadow-blue-500/20",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    border: "hover:border-purple-500",
    shadow: "hover:shadow-purple-500/20",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  red: {
    border: "hover:border-red-500",
    shadow: "hover:shadow-red-500/20",
    button: "bg-red-600 hover:bg-red-700",
  },
  yellow: {
    border: "hover:border-yellow-500",
    shadow: "hover:shadow-yellow-500/20",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black",
  },
  cyan: {
    border: "hover:border-cyan-500",
    shadow: "hover:shadow-cyan-500/20",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },
} as const;

export default function ClubCard({ club }: ClubCardProps) {
  const color =
    colors[club.color as keyof typeof colors] ?? colors.green;

  return (
    <div
      className={`group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${color.border} ${color.shadow}`}
    >
      <div className="flex justify-center">
        <Image
          src={club.logo}
          alt={club.name}
          width={130}
          height={130}
          className="h-32 w-32 object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-6 text-center text-3xl font-extrabold tracking-wide text-white">
        {club.name}
      </h3>

      <p className="mt-4 min-h-[72px] text-center text-sm leading-7 text-zinc-300">
        {club.description}
      </p>

      <div className="my-6 border-t border-zinc-800" />

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 text-center">
          <p className="text-2xl font-bold text-white">
            {club.members}
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
            Members
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 text-center">
          <p className="text-2xl font-bold text-white">
            {club.events}
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
            Events
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 text-center">
          <p className="text-2xl font-bold text-white">
            {club.news}
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
            News
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 text-center">
          <p className="text-2xl font-bold text-white">
            {club.gallery}
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
            Gallery
          </p>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={`/clubs/${club.slug}`}
          className={`block w-full rounded-xl px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-105 ${color.button}`}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}