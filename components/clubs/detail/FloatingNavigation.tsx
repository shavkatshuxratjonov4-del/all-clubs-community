"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";

export default function FloatingNavigation() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* Back to Clubs */}
      <Link
        href="/#clubs"
        className="
          fixed
          bottom-6
          left-6
          z-50
          flex
          items-center
          gap-2
          rounded-full
          border
          border-zinc-700
          bg-zinc-900/90
          px-5
          py-3
          text-sm
          font-semibold
          backdrop-blur-xl
          transition
          hover:border-green-500
          hover:bg-zinc-800
          md:hidden
        "
      >
        <ArrowLeft size={18} />
        Clubs
      </Link>

      {/* Scroll Top */}
      <button
        onClick={scrollTop}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-white
          shadow-xl
          transition
          hover:scale-110
          hover:bg-green-700
          md:hidden
        "
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}