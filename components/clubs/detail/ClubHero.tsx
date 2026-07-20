import Image from "next/image";

interface ClubHeroProps {
  club: any;
}

export default function ClubHero({ club }: ClubHeroProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl">
      {/* Banner */}
      <div className="relative h-72 w-full">
        {club.banner_url ? (
          <Image
            src={club.banner_url}
            alt={club.name}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-green-700 via-green-900 to-zinc-950" />
        )}

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative -mt-20 px-8 pb-10">
        <div className="flex justify-center md:justify-start">
          <div className="rounded-full border-4 border-zinc-900 bg-zinc-900 p-3 shadow-2xl">
            <Image
              src={club.logo_url ?? "/images/placeholder-logo.png"}
              alt={club.name}
              width={130}
              height={130}
              className="rounded-full object-contain"
            />
          </div>
        </div>

        <h1 className="mt-8 text-center text-5xl font-black md:text-left">
          {club.name}
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-center leading-8 text-zinc-300 md:mx-0 md:text-left">
          {club.short_description}
        </p>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 text-center">
            <p className="text-3xl font-black">
              {club.members}
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Members
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 text-center">
            <p className="text-3xl font-black">
              {club.events}
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Events
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 text-center">
            <p className="text-3xl font-black">
              {club.news}
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              News
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 text-center">
            <p className="text-3xl font-black">
              {club.gallery}
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Gallery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}