import Image from "next/image";
import { Club } from "./types";

interface ClubMobileCardProps {
  club: Club;
}

const colors = {
  green: {
    border: "border-green-500/30",
    button: "bg-green-600 hover:bg-green-700",
  },
  blue: {
    border: "border-blue-500/30",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  purple: {
    border: "border-purple-500/30",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  red: {
    border: "border-red-500/30",
    button: "bg-red-600 hover:bg-red-700",
  },
  yellow: {
    border: "border-yellow-500/30",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black",
  },
  cyan: {
    border: "border-cyan-500/30",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },
} as const;

export default function ClubMobileCard({
  club,
}: ClubMobileCardProps) {
  const color =
    colors[club.color as keyof typeof colors] ?? colors.green;

  return (
    <div
      className={`rounded-3xl border ${color.border} bg-zinc-900 p-6`}
    >
      {/* Logo */}

      <div className="flex justify-center">
        <Image
          src={club.logo}
          alt={club.name}
          width={90}
          height={90}
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Title */}

      <h3 className="mt-5 text-center text-2xl font-bold text-white">
        {club.name}
      </h3>

      {/* Description */}

      <p className="mt-3 text-center text-sm leading-6 text-zinc-400">
        {club.description}
      </p>

      {/* Statistics */}

      <div className="mt-6 flex items-center justify-center gap-10">

        <div className="text-center">
          <p className="text-2xl font-bold text-white">
            {club.members}
          </p>

          <span className="text-xs uppercase tracking-wider text-zinc-500">
            Members
          </span>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-white">
            {club.events}
          </p>

          <span className="text-xs uppercase tracking-wider text-zinc-500">
            Events
          </span>
        </div>

      </div>

      {/* Button */}

      <button
        className={`mt-7 w-full rounded-xl py-3 font-semibold text-white transition ${color.button}`}
      >
        Learn More →
      </button>
    </div>
  );
}