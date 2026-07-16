"use client";

import Link from "next/link";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

interface UserMenuProps {
  user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "User";

  return (
    <div className="relative hidden lg:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 font-bold">
          {displayName.charAt(0).toUpperCase()}
        </div>

        <span className="font-medium">{displayName}</span>

        <span className="text-zinc-400">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">

          <div className="border-b border-zinc-800 p-4">
            <p className="font-semibold text-white">
              {displayName}
            </p>

            <p className="truncate text-sm text-zinc-400">
              {user.email}
            </p>
          </div>

          <nav className="flex flex-col p-2">

            <Link
              href="/profile"
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-900"
            >
              👤 My Profile
            </Link>

            <Link
              href="/my-id"
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-900"
            >
              🪪 Digital Student ID
            </Link>

            <Link
              href="/my-clubs"
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-900"
            >
              🌱 My Clubs
            </Link>

            <Link
              href="/settings"
              className="rounded-lg px-3 py-2 transition hover:bg-zinc-900"
            >
              ⚙️ Settings
            </Link>

            <hr className="my-2 border-zinc-800" />

            <button
              onClick={handleLogout}
              className="rounded-lg px-3 py-2 text-left text-red-400 transition hover:bg-red-950"
            >
              🚪 Logout
            </button>

          </nav>

        </div>
      )}
    </div>
  );
}