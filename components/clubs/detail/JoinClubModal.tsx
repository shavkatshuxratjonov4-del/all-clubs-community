"use client";

import { useEffect, useState } from "react";

import {
  getCurrentProfile,
  updateProfile,
  Profile,
} from "@/lib/services/profile";

import { joinClub } from "@/lib/services/membership";

interface JoinClubModalProps {
  open: boolean;
  clubId: string;
  onClose: () => void;
  onJoined: () => void;
}

export default function JoinClubModal({
  open,
  clubId,
  onClose,
  onJoined,
}: JoinClubModalProps) {
  const [loading, setLoading] = useState(false);
  const [loadingProfile, setLoadingProfile] =
    useState(true);

  const [agree, setAgree] = useState(false);

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [faculty, setFaculty] =
    useState("");

  const [groupName, setGroupName] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!open) return;

    loadProfile();
  }, [open]);

  async function loadProfile() {
    setLoadingProfile(true);

    const data =
      await getCurrentProfile();

    if (!data) {
      setLoadingProfile(false);
      return;
    }

    setProfile(data);

    setFullName(
      data.full_name ?? ""
    );

    setEmail(
      data.email ?? ""
    );

    setPhone(
      data.phone ?? ""
    );

    setFaculty(
      data.faculty ?? ""
    );

    setGroupName(
      data.group_name ?? ""
    );

    setLoadingProfile(false);
  }

  async function handleSubmit() {
    setError("");

    if (!agree) {
      setError(
        "Please accept the club rules."
      );
      return;
    }

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !faculty.trim() ||
      !groupName.trim()
    ) {
      setError(
        "Please fill in all required fields."
      );
      return;
    }

    if (!profile) {
      setError(
        "Profile not found."
      );
      return;
    }

    setLoading(true);

    const profileResult =
      await updateProfile({
        full_name: fullName,
        phone,
        faculty,
        group_name: groupName,
      });

    if (profileResult.error) {
      setError(
        "Failed to update profile."
      );

      setLoading(false);
      return;
    }

    const membershipResult =
      await joinClub(
        clubId,
        profile.id
      );

    if (membershipResult.error) {
      setError(
        membershipResult.error.message
      );

      setLoading(false);
      return;
    }

    onJoined();

    onClose();

    setLoading(false);
  }

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center
      bg-black/70
      p-4
      backdrop-blur-sm
    "
    >
      <div
        className="
        w-full
        max-w-3xl
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
      "
      >
        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-black">
            Join Club
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-xl
              bg-zinc-800
              px-3
              py-2
              hover:bg-zinc-700
            "
          >
            ✕
          </button>

        </div>

        {loadingProfile ? (

          <div className="py-24 text-center text-zinc-400">
            Loading profile...
          </div>

        ) : (

          <>
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Full Name *
                </label>

                <input
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-800
                    p-3
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>

                <input
                  disabled
                  value={email}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-800
                    p-3
                    opacity-70
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Phone *
                </label>

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-800
                    p-3
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Faculty *
                </label>

                <input
                  value={faculty}
                  onChange={(e) =>
                    setFaculty(e.target.value)
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-800
                    p-3
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-zinc-400">
                  Group *
                </label>

                <input
                  value={groupName}
                  onChange={(e) =>
                    setGroupName(e.target.value)
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-zinc-700
                    bg-zinc-800
                    p-3
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-green-600/20 bg-green-900/10 p-5">

              <label className="flex items-start gap-3">

                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) =>
                    setAgree(e.target.checked)
                  }
                  className="mt-1"
                />

                <span className="text-sm leading-6 text-zinc-300">
                  I confirm that the information above is
                  correct and I agree to follow the club
                  rules and university regulations.
                </span>

              </label>

            </div>

            {error && (
              <p className="mt-6 text-center text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="
                mt-8
                w-full
                rounded-2xl
                bg-green-600
                py-4
                text-lg
                font-bold
                text-white
                transition
                hover:bg-green-700
                disabled:opacity-60
              "
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>

          </>

        )}

      </div>

    </div>
  );
}