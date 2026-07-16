"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface StudentQRCodeProps {
  studentId: string;
  logo?: string;
}

export default function StudentQRCode({
  studentId,
  logo = "/images/tdau.png",
}: StudentQRCodeProps) {
  const [size, setSize] = useState(260);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(190);
      } else {
        setSize(260);
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () =>
      window.removeEventListener("resize", updateSize);
  }, []);

  const qrValue = JSON.stringify({
    v: 1,
    type: "student",
    id: studentId,
  });

  return (
    <div className="flex flex-col items-center">

      <div
        className="
          rounded-[24px]
          bg-white
          p-3
          shadow-[0_20px_60px_rgba(0,0,0,.25)]
          sm:rounded-[28px]
          sm:p-5
        "
      >

        <QRCodeSVG
          value={qrValue}
          size={size}
          level="H"
          bgColor="#ffffff"
          fgColor="#111827"
          includeMargin={false}
          imageSettings={{
            src: logo,
            height: size * 0.18,
            width: size * 0.18,
            excavate: true,
          }}
        />

      </div>

      <div className="mt-3 text-center sm:mt-5">

        <p className="text-[10px] uppercase tracking-[0.30em] text-zinc-500 sm:text-xs">
          Student ID
        </p>

        <p className="mt-1 text-sm font-black tracking-wider text-white sm:mt-2 sm:text-lg">
          {studentId}
        </p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-2 sm:mt-5 sm:px-4">

          <span className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-xs font-semibold text-green-300 sm:text-sm">
            Ready for Verification
          </span>

        </div>

      </div>

    </div>
  );
}