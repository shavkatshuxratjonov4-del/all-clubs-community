"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase/client";
import {
  getMembershipStatus,
  MembershipStatus,
} from "@/lib/services/membership";

import JoinClubModal from "./JoinClubModal";

interface JoinClubButtonProps {
  clubId: string;
}

export default function JoinClubButton({
  clubId,
}: JoinClubButtonProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [status, setStatus] =
    useState<MembershipStatus>(null);

  const [modalOpen, setModalOpen] =
    useState(false);

  useEffect(() => {
    loadStatus();
  }, []);

  async function loadStatus() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const membershipStatus =
      await getMembershipStatus(
        clubId,
        user.id
      );

    setStatus(membershipStatus);

    setLoading(false);
  }

  async function handleJoinClick() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push(
        `/login?redirect=/clubs/${clubId}&action=join`
      );

      return;
    }

    if (
      status === "approved" ||
      status === "pending"
    ) {
      return;
    }

    setModalOpen(true);
  }

  function buttonText() {
    if (loading)
      return "Loading...";

    switch (status) {
      case "approved":
        return "✅ Joined";

      case "pending":
        return "⏳ Pending Approval";

      case "rejected":
        return "Apply Again";

      default:
        return "🚀 Join Club";
    }
  }

  return (
    <>
      <section
        className="
          mt-16
          rounded-3xl
          border
          border-green-600/30
          bg-gradient-to-r
          from-green-900/20
          to-emerald-900/20
          p-10
        "
      >
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-black">
            Ready to Join?
          </h2>

          <p className="mt-5 leading-8 text-zinc-300">
            Become part of the community,
            participate in exciting events,
            improve your skills and meet
            students with the same interests.
          </p>
          <button
            onClick={handleJoinClick}
            disabled={
              loading ||
              status === "approved" ||
              status === "pending"
            }
            className="
              mt-10
              rounded-2xl
              bg-green-600
              px-10
              py-4
              text-lg
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-green-700
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {buttonText()}
          </button>

        </div>
      </section>

      <JoinClubModal
        open={modalOpen}
        clubId={clubId}
        onClose={() => setModalOpen(false)}
        onJoined={() => {
          setModalOpen(false);
          setStatus("pending");
        }}
      />
    </>
  );
}