import ClubCard from "./ClubCard";
import ClubCarousel from "./ClubCarousel";
import { clubs } from "./clubsData";

export default function ClubGrid() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <ClubCarousel />
      </div>

      {/* Desktop */}
      <div className="mt-16 hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {clubs.map((club) => (
          <ClubCard
            key={club.id}
            club={club}
          />
        ))}
      </div>
    </>
  );
}