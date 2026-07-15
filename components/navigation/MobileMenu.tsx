"use client";

import Link from "next/link";

import { navLinks } from "./navLinks";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
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
              ? "opacity-100 visible"
              : "opacity-0 invisible"
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

        {/* Navigation */}
        <nav className="flex flex-1 flex-col p-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="
                rounded-xl
                px-4
                py-4
                text-lg
                transition
                hover:bg-zinc-900
                hover:text-green-400
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="p-6">
          <Link
            href="/login"
            onClick={onClose}
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-green-600
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-green-700
            "
          >
            Login
          </Link>
        </div>
      </aside>
    </>
  );
}