"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import StudentCard from "@/components/student-card/StudentCard";

import {
  getCurrentProfile,
  Profile,
} from "@/lib/services/profile";

export default function MyStudentIdPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const data = await getCurrentProfile();

      if (!data) {
        router.push("/login");
        return;
      }

      setProfile(data);
      setLoading(false);
    }

    loadProfile();
  }, [router]);

  if (loading) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />

          <p className="mt-6 text-zinc-400">
            Loading Student ID...
          </p>
        </div>
      </main>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="
          mb-8
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          px-4
          py-2
          text-sm
          font-medium
          transition
          hover:border-green-500
          hover:bg-zinc-800
        "
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Header */}
      <div className="mb-12 text-center">

        <h1 className="text-5xl font-black">
          Digital Student ID
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Your official university digital identity.
          Use this card for club membership,
          event participation and QR verification.
        </p>

      </div>

      {/* Student Card */}
      <StudentCard
        fullName={profile.full_name}
        avatarUrl={profile.avatar_url}
        studentId={profile.student_id}
        faculty={profile.faculty ?? "-"}
        group={profile.group_name ?? "-"}
        status={profile.status ?? "active"}
        points={0}
      />

    </main>
  );
}