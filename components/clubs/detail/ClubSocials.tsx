interface ClubSocialsProps {
  telegram: string | null;
  instagram: string | null;
  youtube: string | null;
  website: string | null;
}

export default function ClubSocials({
  telegram,
  instagram,
  youtube,
  website,
}: ClubSocialsProps) {
  return (
    <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-3xl font-black">
        Social Media
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {telegram && (
          <a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-sky-500 hover:bg-zinc-900"
          >
            <div className="text-3xl">📨</div>

            <h3 className="mt-3 text-xl font-bold">
              Telegram
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Join our Telegram community.
            </p>
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-pink-500 hover:bg-zinc-900"
          >
            <div className="text-3xl">📸</div>

            <h3 className="mt-3 text-xl font-bold">
              Instagram
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Follow club activities.
            </p>
          </a>
        )}

        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-red-500 hover:bg-zinc-900"
          >
            <div className="text-3xl">▶️</div>

            <h3 className="mt-3 text-xl font-bold">
              YouTube
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Watch videos and recordings.
            </p>
          </a>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-500 hover:bg-zinc-900"
          >
            <div className="text-3xl">🌐</div>

            <h3 className="mt-3 text-xl font-bold">
              Website
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Visit the official website.
            </p>
          </a>
        )}

      </div>

    </section>
  );
}