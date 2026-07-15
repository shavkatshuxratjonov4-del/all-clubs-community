"use client";

import { useEffect, useState } from "react";

import ClubCard from "./ClubCard";
import ClubCarousel from "./ClubCarousel";

import { Club } from "./types";
import { getClubs } from "@/lib/services/clubs";

export default function ClubGrid() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getClubs();

      setClubs(
        data.map((club) => ({
          id: club.id,
          slug: club.slug,

          name: club.name,
          description: club.short_description,

          logo: club.logo_url ?? "",

          members: club.members_count,
          events: club.events_count,

          color: club.button_color ?? "green",
        }))
      );

      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="mt-16 text-center text-zinc-400">
        Loading clubs...
      </div>
    );
  }

  return (
    <>
      <div className="md:hidden">
        <ClubCarousel clubs={clubs} />
      </div>

      <div className="mt-16 hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={club}
          />
        ))}
      </div>
    </>
  );
}