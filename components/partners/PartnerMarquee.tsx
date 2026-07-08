"use client";

import Image from "next/image";
import { partners } from "./partnersData";

export default function PartnerMarquee() {
  const items = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="partner-marquee flex w-max items-center gap-6">
        {items.map((partner, index) => (
          <a
            key={`${partner.id}-${index}`}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-24 w-56 shrink-0 items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 transition-all duration-300 hover:border-green-500 hover:bg-zinc-900"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={52}
              height={52}
              className="object-contain"
            />

            <div>
              <h3 className="text-sm font-bold text-white transition-colors group-hover:text-green-400">
                {partner.name}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Official Partner
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}