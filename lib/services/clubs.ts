import { supabase } from "@/lib/supabase/client";

export interface Club {
  id: string;
  university_id: string;

  name: string;
  slug: string;

  short_description: string;
  description: string;

  logo_url: string | null;
  banner_url: string | null;

  button_color: string | null;
  color: string;

  telegram: string | null;
  instagram: string | null;
  youtube: string | null;
  website: string | null;

  status: string;

  created_at: string;
  updated_at: string;

  members: number;
  events: number;
  news: number;
  gallery: number;

  display_order?: number;
}
export async function getClubsWithStatistics(): Promise<Club[]> {
  const { data, error } = await supabase.rpc(
    "get_clubs_with_statistics"
  );

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []) as Club[];
}

export async function getClubs(): Promise<Club[]> {
  return getClubsWithStatistics();
}

export async function getClubBySlug(
  slug: string
): Promise<Club | null> {
  const { data, error } = await supabase.rpc(
    "get_club_details",
    {
      club_slug: slug,
    }
  );

  if (error) {
    console.error(error);
    return null;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return data[0] as Club;
}