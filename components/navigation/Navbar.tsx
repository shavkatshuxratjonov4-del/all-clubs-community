"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthButton from "./AuthButton";

import { supabase } from "@/lib/supabase/client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user ?? null);
      setLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-zinc-800/70
          bg-black/70
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-3">

            <LanguageSwitcher />

            <AuthButton
              user={user}
              loading={loading}
            />

            <div
              className="lg:hidden"
              onClick={() => setOpen(true)}
            >
              <MobileNav />
            </div>

          </div>

        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        user={user}
      />
    </>
  );
}