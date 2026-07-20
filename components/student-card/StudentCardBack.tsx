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
        rounded-[30px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#04111F]
        via-[#08243B]
        to-[#0E5A3B]
        p-5
        text-white
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        sm:p-6
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -left-24
          h-72
          w-72
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

          <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300">
            Toshkent Davlat Agrar Universiteti
          </p>

          <h2 className="mt-1 text-2xl font-black">
            QR Verification
          </h2>

          <p className="mt-2 text-sm text-zinc-300">
            Scan using Club Admin Scanner
          </p>

        </div>

        {/* QR */}
        <div className="mt-5 flex justify-center">
          <StudentQRCode studentId={studentId} />
        </div>

      </div>
    </div>
  );
}