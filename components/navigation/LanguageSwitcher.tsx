"use client";

export default function LanguageSwitcher() {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900/70
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:border-green-500
        hover:text-green-400
      "
    >
      🇺🇿
      <span>UZ</span>
    </button>
  );
}