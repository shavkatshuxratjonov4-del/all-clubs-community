import { supabase } from "./client";

export async function getEventCount() {
  const { count, error } = await supabase
    .from("events")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (error) {
    console.error(error);
    return 0;
  }

  return count ?? 0;
}