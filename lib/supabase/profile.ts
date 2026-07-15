import { User } from "@supabase/supabase-js";
import { supabase } from "./client";

export async function syncUserProfile(user: User) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return;
  }

  if (profile) return;

  const { error: insertError } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
      email: user.email,
      full_name:
        user.user_metadata?.full_name ??
        user.email?.split("@")[0],
    });

  if (insertError) {
    console.error(insertError);
  }
}