"use client";

import { useEffect, useState } from "react";

import AnimatedCounter from "./AnimatedCounter";
import {
  getPlatformStatistics,
  PlatformStatistics,
} from "@/lib/supabase/statistics";

export default function Statistics() {
  const [statistics, setStatistics] =
    useState<PlatformStatistics>({
      clubs: 0,
      students: 0,
      events: 0,
      partners: 0,
    });

  useEffect(() => {
    async function loadStatistics() {
      const data = await getPlatformStatistics();
      setStatistics(data);
    }

    loadStatistics();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">

        <div>
          <AnimatedCounter
            end={statistics.clubs}
          />
          <p className="mt-3 text-gray-400">
            Student Clubs
          </p>
        </div>

        <div>
          <AnimatedCounter
            end={statistics.students}
          />
          <p className="mt-3 text-gray-400">
            Students
          </p>
        </div>

        <div>
          <AnimatedCounter
            end={statistics.events}
          />
          <p className="mt-3 text-gray-400">
            Events
          </p>
        </div>

        <div>
          <AnimatedCounter
            end={statistics.partners}
          />
          <p className="mt-3 text-gray-400">
            Partners
          </p>
        </div>

      </div>
    </section>
  );
}