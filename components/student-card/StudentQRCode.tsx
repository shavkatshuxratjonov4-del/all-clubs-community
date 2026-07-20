"use client";

import { useEffect, useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface StudentQRCodeProps {
  studentId: string;
  logo?: string;
}

export default function StudentQRCode({
  studentId,
  logo = "/images/acc.svg",
}: StudentQRCodeProps) {
  const [size, setSize] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 640 ? 220 : 300);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const qrValue = useMemo(() => {
    return `https://clubs.tdau.uz/id/${studentId}`;
  }, [studentId]);

  return (
    <div className="flex w-full flex-col items-center">

      {/* QR PANEL */}

      <div
        className="
          w-full
          max-w-[360px]
          rounded-[30px]
          border
          border-white/20
          bg-gradient-to-b
          from-[#F7FAF8]
          via-[#F2F7F4]
          to-[#EDF4F0]
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,.22)]
        "
      >

        <div className="flex justify-center">

          <QRCodeSVG
            value={qrValue}
            size={size}
            level="H"
            includeMargin={false}
            bgColor="#FFFFFF"
            fgColor="#111827"
            imageSettings={{
              src: logo,
              width: size * 0.20,
              height: size * 0.20,
              excavate: true,
            }}
          />

        </div>

      </div>

      {/* STUDENT ID */}

      <div className="mt-7 text-center">

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.34em]
            text-zinc-400
          "
        >
          Student ID
        </p>

        <p
          className="
            mt-2
            text-xl
            font-black
            tracking-[0.18em]
            text-white
          "
        >
          {studentId}
        </p>
        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-emerald-500/30
            bg-emerald-500/10
            px-5
            py-2
            backdrop-blur-sm
          "
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

          <span
            className="
              text-sm
              font-semibold
              text-emerald-300
            "
          >
            Scan by Club Admin
          </span>
        </div>

        <p
          className="
            mx-auto
            mt-5
            max-w-[290px]
            text-sm
            leading-7
            text-zinc-400
          "
        >
          This permanent QR code is used for student identity verification,
          event registration confirmation and attendance tracking within
          All Clubs Community.
        </p>

      </div>

    </div>
  );
}