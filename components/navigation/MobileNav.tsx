"use client";

export default function MobileNav() {
  return (
    <button
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/70
        text-white
        transition-all
        duration-300
        hover:border-green-500
      "
      aria-label="Open Menu"
    >
      ☰
    </button>
  );
}