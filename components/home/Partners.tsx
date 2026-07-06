import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "TDAU",
      description: "Tashkent State Agrarian University",
      logo: "/images/partners/tdau.png",
      website: "https://tdau.uz",
    },
  ];

  return (
    <section
      id="partners"
      className="mx-auto max-w-7xl px-8 py-28"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-5xl font-black text-white">
          Official Partner
        </h2>

        <p className="mt-5 text-lg text-gray-400">
          Proudly collaborating with our trusted institution.
        </p>
      </div>

      {/* Partner Card */}
      <div className="mt-16 flex justify-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              {partner.name}
            </h3>

            <p className="mt-3 text-gray-400">
              {partner.description}
            </p>

            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-xl border border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
            >
              Visit Website →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}