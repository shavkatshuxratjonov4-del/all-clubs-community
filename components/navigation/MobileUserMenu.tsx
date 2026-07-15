"use client";

import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";

interface MobileUserMenuProps {
  user: User;
  onClose: () => void;
}

export default function MobileUserMenu({
  user,
  onClose,
}: MobileUserMenuProps) {

  const displayName =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "User";

  async function handleLogout() {
    await supabase.auth.signOut();
    onClose();
    window.location.href = "/";
  }

  return (
    <div className="border-t border-zinc-800 p-6">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-lg font-bold">
          {displayName.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-semibold text-white">
            {displayName}
          </p>

          <p className="max-w-[180px] truncate text-sm text-zinc-400">
            {user.email}
          </p>
        </div>

      </div>

      <div className="flex flex-col gap-2">

        <Link
          href="/profile"
          onClick={onClose}
          className="rounded-lg px-4 py-3 hover:bg-zinc-900"
        >
          👤 My Profile
        </Link>

        <Link
          href="/my-clubs"
          onClick={onClose}
          className="rounded-lg px-4 py-3 hover:bg-zinc-900"
        >
          🌱 My Clubs
        </Link>

        <Link
          href="/settings"
          onClick={onClose}
          className="rounded-lg px-4 py-3 hover:bg-zinc-900"
        >
          ⚙️ Settings
        </Link>

        <button
          onClick={handleLogout}
          className="rounded-lg px-4 py-3 text-left text-red-400 hover:bg-red-950"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}