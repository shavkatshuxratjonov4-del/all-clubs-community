import StudentQRCode from "./StudentQRCode";

interface StudentCardBackProps {
  studentId: string;
}

export default function StudentCardBack({
  studentId,
}: StudentCardBackProps) {
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
        <div className="text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-green-300 sm:text-xs">
            Toshkent Davlat Agrar Universiteti
          </p>

          <h2 className="mt-1 text-xl font-black sm:mt-2 sm:text-3xl">
            Verification Card
          </h2>

          <p className="mt-2 text-xs leading-5 text-zinc-400 sm:mt-3 sm:text-sm sm:leading-6">
            Show this card to the Club Admin for
            verification and attendance.
          </p>

        </div>

        {/* QR */}
        <div className="mt-5 flex justify-center sm:mt-8">

          <div
            className="
              w-full
              max-w-[250px]
              rounded-3xl
              border
              border-white/10
              bg-white
              p-3
              shadow-2xl
              sm:max-w-[340px]
              sm:p-5
            "
          >
            <StudentQRCode
              studentId={studentId}
            />
          </div>

        </div>

        {/* Student Info */}
        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:mt-8 sm:p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Student ID
              </p>

              <p className="mt-2 text-sm font-black tracking-wider sm:text-lg">
                {studentId}
              </p>

            </div>

            <div className="text-right">

              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Status
              </p>

              <p className="mt-2 font-bold text-green-400">
                VERIFIED
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between sm:mt-6">

          <div>

            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Verification
            </p>

            <p className="mt-1 text-sm font-semibold">
              Club Admin Scan
            </p>

          </div>

          <div className="text-right">

            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Platform
            </p>

            <p className="mt-1 text-sm font-semibold">
              All Clubs Community
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}