"use client";

import { useEffect, useState } from "react";

import {
  getCurrentProfile,
  updateProfile,
  Profile,
} from "@/lib/services/profile";

export default function ProfileForm() {
  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

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

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);

    const data =
      await getCurrentProfile();

    if (!data) {
      setLoading(false);
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

    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);

    setError("");

    setSuccess(false);

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !faculty.trim() ||
      !groupName.trim()
    ) {
      setError(
        "Please fill in all required fields."
      );

      setSaving(false);

      return;
    }

    const result =
      await updateProfile({
        full_name: fullName,
        phone,
        faculty,
        group_name: groupName,
      });

    if (result.error) {
      setError(
        "Failed to update profile."
      );

      setSaving(false);

      return;
    }

    setSuccess(true);

    setSaving(false);
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-zinc-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
      "
    >
      <div className="mb-10 flex flex-col items-center">

        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-green-600 bg-zinc-800 text-5xl font-black text-white">
          {fullName
            ? fullName.charAt(0).toUpperCase()
            : "U"}
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          {fullName || "Student"}
        </h2>

        <p className="mt-1 text-zinc-400">
          {email}
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

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
            placeholder="+998 90 123 45 67"
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
            placeholder="Faculty"
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
            placeholder="Group"
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

      {error && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
          ✅ Your profile has been updated successfully.
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={saving}
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
        {saving
          ? "Saving..."
          : "Save Changes"}
      </button>

    </div>
  );
}
