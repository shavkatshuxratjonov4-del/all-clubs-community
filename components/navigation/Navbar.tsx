"use client";

import { useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthButton from "./AuthButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Language */}
            <LanguageSwitcher />

            {/* Authentication */}
            <AuthButton />

            {/* Mobile Menu */}
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
      />
    </>
  );
}