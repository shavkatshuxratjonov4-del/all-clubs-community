interface ClubInfoProps {
  description: string;
}

export default function ClubInfo({
  description,
}: ClubInfoProps) {
  return (
    <section className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* About Club */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-3xl font-black">
          About Club
        </h2>

        <p className="leading-8 text-zinc-300">
          {description}
        </p>

      </div>

      {/* Why Join */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-3xl font-black">
          Why Join?
        </h2>

        <div className="space-y-5">

          <div className="flex gap-4">
            <span className="text-2xl">✅</span>

            <div>
              <h3 className="font-bold">
                Weekly Activities
              </h3>

              <p className="text-zinc-400">
                Participate in regular club meetings,
                workshops and practical sessions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">🏆</span>

            <div>
              <h3 className="font-bold">
                Competitions
              </h3>

              <p className="text-zinc-400">
                Represent the university in local
                and national competitions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">🤝</span>

            <div>
              <h3 className="font-bold">
                Networking
              </h3>

              <p className="text-zinc-400">
                Meet talented students and build
                valuable friendships.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-2xl">📜</span>

            <div>
              <h3 className="font-bold">
                Certificates
              </h3>

              <p className="text-zinc-400">
                Receive certificates for active
                participation in club activities.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}