import { supabase } from "@/lib/supabase/client";

export interface Profile {
  id: string;

  student_id: string;

  email: string;

  full_name: string;

  phone: string | null;

  avatar_url: string | null;

  faculty: string | null;

  group_name: string | null;

  role: string | null;

  status: string | null;
}

export async function getCurrentProfile() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } =
    await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data as Profile;
}

export async function updateProfile(
  profile: Pick<
    Profile,
    | "full_name"
    | "phone"
    | "faculty"
    | "group_name"
  >
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: new Error(
        "Not authenticated"
      ),
    };
  }

  const { error } =
    await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        phone: profile.phone,
        faculty: profile.faculty,
        group_name:
          profile.group_name,
      })
      .eq("id", user.id);

  return {
    error,
  };
}