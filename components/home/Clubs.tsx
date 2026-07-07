import ClubGrid from "@/components/clubs/ClubGrid";

export default function Clubs() {
  return (
    <section
      id="clubs"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      <div className="text-center">
        <h2 className="text-5xl font-black">
          Our Clubs
        </h2>

        <p className="mt-5 text-gray-400">
          Choose your community and start your journey today.
        </p>
      </div>

      <ClubGrid />
    </section>
  );
}