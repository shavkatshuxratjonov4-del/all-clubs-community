"use client";

import Image from "next/image";

interface StudentPhotoProps {
  fullName: string;
  avatarUrl?: string | null;
}

export default function StudentPhoto({
  fullName,
  avatarUrl,
}: StudentPhotoProps) {
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={fullName}
        width={120}
        height={120}
        className="
          h-20
          w-20
          rounded-full
          border-[3px]
          border-white/20
          object-cover
          shadow-xl
          sm:h-32
          sm:w-32
          sm:border-4
          sm:shadow-2xl
        "
      />
    );
  }

  return (
    <div
      className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        border-[3px]
        border-white/20
        bg-white/10
        text-3xl
        font-black
        text-white
        shadow-xl
        sm:h-32
        sm:w-32
        sm:border-4
        sm:text-5xl
        sm:shadow-2xl
      "
    >
      {fullName.charAt(0).toUpperCase()}
    </div>
  );
}