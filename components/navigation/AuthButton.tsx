"use client";

import Link from "next/link";
import { User } from "@supabase/supabase-js";

import UserMenu from "./UserMenu";

interface AuthButtonProps {
  user: User | null;
  loading: boolean;
}

export default function AuthButton({
  user,
  loading,
}: AuthButtonProps) {
  if (loading) {
    return (
      <div className="hidden lg:block text-zinc-500">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="
          hidden
          lg:inline-flex
          items-center
          justify-center
          rounded-xl
          bg-green-600
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-green-700
        "
      >
        Login
      </Link>
    );
  }

  return <UserMenu user={user} />;
}