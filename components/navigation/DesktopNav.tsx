"use client";

import { navLinks } from "./navLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            text-sm
            font-medium
            text-zinc-300
            transition-all
            duration-300
            hover:text-green-400
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}