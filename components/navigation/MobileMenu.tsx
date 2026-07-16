"use client";

import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { navLinks } from "./navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}

export default function MobileMenu({
  open,
  onClose,
  user,
}: MobileMenuProps) {
  async function handleLogout() {
    await supabase.auth.signOut();
    onClose();
    window.location.href = "/";
  }

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-80
          flex-col
          border-l
          border-zinc-800
          bg-zinc-950
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* User */}
        {user && (
          <div className="border-b border-zinc-800 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold">
                {displayName.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="font-semibold text-white">
                  {displayName}
                </p>

                <p className="truncate text-sm text-zinc-400">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex flex-1 flex-col p-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-4 text-lg transition hover:bg-zinc-900 hover:text-green-400"
            >
              {item.label}
            </Link>
          ))}

          {user && (
            <>
              <div className="my-4 border-t border-zinc-800" />

              <Link
                href="/profile"
                onClick={onClose}
                className="rounded-xl px-4 py-4 hover:bg-zinc-900"
              >
                👤 My Profile
              </Link>

              <Link
                href="/my-id"
                onClick={onClose}
                className="rounded-xl px-4 py-4 hover:bg-zinc-900"
              >
                🪪 My ID
              </Link>

              <Link
                href="/my-clubs"
                onClick={onClose}
                className="rounded-xl px-4 py-4 hover:bg-zinc-900"
              >
                🌱 My Clubs
              </Link>

              <Link
                href="/settings"
                onClick={onClose}
                className="rounded-xl px-4 py-4 hover:bg-zinc-900"
              >
                ⚙️ Settings
              </Link>
            </>
          )}
        </nav>

        {/* Bottom */}
        <div className="p-6">
          {user ? (
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Login
            </Link>
          )}
        </div>
      </aside>
    </>
  );
}