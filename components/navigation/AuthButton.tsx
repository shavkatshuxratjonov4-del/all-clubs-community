"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase/client";
import UserMenu from "./UserMenu";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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