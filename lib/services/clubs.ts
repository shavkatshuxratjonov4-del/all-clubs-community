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

  members_count: number;
  events_count: number;

  button_color: string | null;

  color: string;

  telegram: string | null;
  instagram: string | null;
  youtube: string | null;
  website: string | null;

  status: string;

  created_at: string;
  updated_at: string;
}

export async function getClubs(): Promise<Club[]> {
  const { data, error } = await supabase
    .from("clubs")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Club[];
}