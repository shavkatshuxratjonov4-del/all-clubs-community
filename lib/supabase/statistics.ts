import { supabase } from "./client";

export interface PlatformStatistics {
  clubs: number;
  students: number;
  events: number;
  partners: number;
}

export async function getPlatformStatistics(): Promise<PlatformStatistics> {
  const { data, error } = await supabase.rpc(
    "get_platform_statistics"
  );

  if (error) {
    console.error(error);

    return {
      clubs: 0,
      students: 0,
      events: 0,
      partners: 0,
    };
  }

  const statistics = data[0];

  return {
    clubs: Number(statistics.clubs),
    students: Number(statistics.students),
    events: Number(statistics.events),
    partners: Number(statistics.partners),
  };
}