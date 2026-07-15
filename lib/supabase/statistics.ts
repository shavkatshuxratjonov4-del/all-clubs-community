import { supabase } from "./client";

export async function getStudentCount() {
  const { count, error } = await supabase
    .from("profiles")
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