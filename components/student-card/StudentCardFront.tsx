import StudentPhoto from "./StudentPhoto";
import StudentBadges from "./StudentBadges";

interface StudentCardFrontProps {
  fullName: string;
  avatarUrl?: string | null;
  studentId: string;
  faculty: string;
  group: string;
  points: number;
}

export default function StudentCardFront({
  fullName,
  avatarUrl,
  studentId,
  faculty,
  group,
  points,
}: StudentCardFrontProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#04111F]
        via-[#08243B]
        to-[#0E5A3B]
        p-4
        text-white
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        sm:rounded-[30px]
        sm:p-7
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:radial-gradient(white_1px,transparent_1px)]
          [background-size:14px_14px]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-green-300 sm:text-xs">
              Toshkent Davlat Agrar Universiteti
            </p>

            <h2 className="mt-1 text-xl font-black sm:mt-2 sm:text-3xl">
              Digital Student ID
            </h2>
          </div>
        </div>

        {/* Avatar */}
        <div className="mt-4 flex justify-center sm:mt-6">
          <StudentPhoto
            fullName={fullName}
            avatarUrl={avatarUrl}
          />
        </div>

        {/* Name */}
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-xl font-black sm:text-3xl">
            {fullName}
          </h3>

          <p className="mt-1 text-xs tracking-[0.22em] text-zinc-400 sm:mt-2 sm:text-sm">
            {studentId}
          </p>
        </div>

        {/* Information */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              Faculty
            </p>

            <p className="mt-2 text-xs font-bold leading-5 sm:text-base">
              {faculty}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:p-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              Group
            </p>

            <p className="mt-2 text-base font-black sm:text-lg">
              {group}
            </p>
          </div>
        </div>

        {/* Reputation */}
        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:mt-6 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Community Reputation
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                {points.toLocaleString()} CP
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-400 sm:text-sm">
                Earn Community Points by joining clubs,
                attending events and contributing to
                university life.
              </p>
            </div>

            <StudentBadges points={points} />
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:my-6" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Platform
            </p>

            <p className="mt-1 text-sm font-semibold sm:text-base">
              All Clubs Community
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              University
            </p>

            <p className="mt-1 text-sm font-semibold sm:text-base">
              TDAU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}