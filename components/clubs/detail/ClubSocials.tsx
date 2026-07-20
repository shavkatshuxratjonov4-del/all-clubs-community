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
  const socials = [
    {
      title: "Telegram",
      icon: "📨",
      href: telegram,
      color: "hover:border-sky-500",
      description: "Join our Telegram community.",
    },
    {
      title: "Instagram",
      icon: "📸",
      href: instagram,
      color: "hover:border-pink-500",
      description: "Follow club activities.",
    },
    {
      title: "YouTube",
      icon: "▶️",
      href: youtube,
      color: "hover:border-red-500",
      description: "Watch videos and recordings.",
    },
    {
      title: "Website",
      icon: "🌐",
      href: website,
      color: "hover:border-green-500",
      description: "Visit the official website.",
    },
  ].filter((item) => item.href);

  if (socials.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-8 text-3xl font-black">
        Social Media
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {socials.map((social) => (
          <a
            key={social.title}
            href={social.href!}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 ${social.color}`}
          >
            <div className="text-4xl">
              {social.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold">
              {social.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {social.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}