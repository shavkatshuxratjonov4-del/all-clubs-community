import ClubCard from "./ClubCard";
import { Club } from "./types";

const clubs: Club[] = [
  {
    id: "eco",
    name: "Eco Club",
    description: "Environmental projects and sustainability.",
    logo: "/images/clubs/eco.png",
    members: 150,
    events: 8,
    color: "green",
  },
  {
    id: "travel",
    name: "Travel Club",
    description: "Explore Uzbekistan with students.",
    logo: "/images/clubs/travel.png",
    members: 30,
    events: 3,
    color: "blue",
  },
  {
    id: "debate",
    name: "Debate Club",
    description: "Improve speaking and leadership skills.",
    logo: "/images/clubs/debate.png",
    members: 10,
    events: 1,
    color: "purple",
  },
  {
    id: "movie",
    name: "Movie Night",
    description: "Watch movies and enjoy together.",
    logo: "/images/clubs/movie.png",
    members: 40,
    events: 3,
    color: "red",
  },
  {
    id: "chill",
    name: "Chill Club",
    description: "Relax, play games and meet friends.",
    logo: "/images/clubs/chill.png",
    members: 10,
    events: 1,
    color: "yellow",
  },
  {
    id: "media",
    name: "Media Club",
    description:
      "Create photos, videos and social media content.",
    logo: "/images/clubs/media.png",
    members: 10,
    events: 6,
    color: "cyan",
  },
];

export default function ClubGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}