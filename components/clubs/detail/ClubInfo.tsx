interface ClubInfoProps {
  description: string;
}

export default function ClubInfo({
  description,
}: ClubInfoProps) {
  return (
    <section className="mt-12">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-10">
        <h2 className="mb-8 text-3xl font-black">
          About Club
        </h2>

        <div className="prose prose-invert max-w-none">
          <p className="whitespace-pre-line text-lg leading-9 text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}