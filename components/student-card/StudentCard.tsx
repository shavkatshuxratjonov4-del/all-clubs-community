"use client";

import { useState } from "react";

import StudentCardFront from "./StudentCardFront";
import StudentCardBack from "./StudentCardBack";

interface StudentCardProps {
  fullName: string;
  avatarUrl?: string | null;
  studentId: string;
  faculty: string;
  group: string;
  status?: string | null;
  points: number;
}

export default function StudentCard({
  fullName,
  avatarUrl,
  studentId,
  faculty,
  group,
  status,
  points,
}: StudentCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md">

      <button
        onClick={() => setFlipped(!flipped)}
        className="
          perspective
          relative
          w-full
          cursor-pointer
          h-[560px]
          sm:h-[700px]
        "
      >

        <div
          className={`
            relative
            h-full
            w-full
            transition-transform
            duration-700
            [transform-style:preserve-3d]
            ${
              flipped
                ? "[transform:rotateY(180deg)]"
                : ""
            }
          `}
        >

          <div
            className="
              absolute
              inset-0
              [backface-visibility:hidden]
            "
          >
            <StudentCardFront
              fullName={fullName}
              avatarUrl={avatarUrl}
              studentId={studentId}
              faculty={faculty}
              group={group}
              status={status}
              points={points}
            />
          </div>

          <div
            className="
              absolute
              inset-0
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <StudentCardBack
              studentId={studentId}
            />
          </div>

        </div>

      </button>

      <p className="mt-4 text-center text-xs text-zinc-500 sm:mt-6 sm:text-sm">
        Tap the card to switch between Student ID and QR Verification.
      </p>

    </div>
  );
}