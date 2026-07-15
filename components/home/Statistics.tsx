"use client";

import { useEffect, useState } from "react";

import AnimatedCounter from "./AnimatedCounter";
import { getStudentCount } from "@/lib/supabase/statistics";

export default function Statistics() {
  const [students, setStudents] = useState(0);

  useEffect(() => {
    async function loadStatistics() {
      const totalStudents = await getStudentCount();
      setStudents(totalStudents);
    }

    loadStatistics();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">

        <div>
          <AnimatedCounter end={6} />
          <p className="mt-3 text-gray-400">
            Student Clubs
          </p>
        </div>

        <div>
          <AnimatedCounter end={students} />
          <p className="mt-3 text-gray-400">
            Students
          </p>
        </div>

        <div>
          <AnimatedCounter end={0} />
          <p className="mt-3 text-gray-400">
            Events
          </p>
        </div>

        <div>
          <AnimatedCounter end={3} />
          <p className="mt-3 text-gray-400">
            Partners
          </p>
        </div>

      </div>
    </section>
  );
}