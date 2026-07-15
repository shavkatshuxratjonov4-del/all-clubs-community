import { notFound } from "next/navigation";

import { getClubBySlug } from "@/lib/services/clubs";

import ClubHero from "@/components/clubs/detail/ClubHero";
import ClubInfo from "@/components/clubs/detail/ClubInfo";
import ClubSocials from "@/components/clubs/detail/ClubSocials";
import JoinClubButton from "@/components/clubs/detail/JoinClubButton";

export default async function ClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const club = await getClubBySlug(slug);

  if (!club) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <ClubHero club={club} />

      <ClubInfo
        description={club.description}
      />

      <ClubSocials
        telegram={club.telegram}
        instagram={club.instagram}
        youtube={club.youtube}
        website={club.website}
      />

      <JoinClubButton />

    </main>
  );
}