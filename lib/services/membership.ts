import { supabase } from "@/lib/supabase/client";

export type MembershipStatus =
  | "pending"
  | "approved"
  | "rejected"
  | null;

/**
 * Clubga a'zolik holatini tekshiradi
 */
export async function getMembershipStatus(
  clubId: string,
  profileId: string
): Promise<MembershipStatus> {
  const { data, error } = await supabase
    .from("club_members")
    .select("status")
    .eq("club_id", clubId)
    .eq("profile_id", profileId)
    .maybeSingle();

  if (error) {
    console.error("STATUS ERROR:", error);
    return null;
  }

  return (data?.status as MembershipStatus) ?? null;
}

/**
 * Clubga qo'shilish uchun ariza yuboradi
 */
export async function joinClub(
  clubId: string,
  profileId: string
) {
  const { data, error } = await supabase
    .from("club_members")
    .insert({
      club_id: clubId,
      profile_id: profileId,
      status: "pending",
    })
    .select();

  console.log("JOIN RESULT:", data);
  console.error("JOIN ERROR:", error);

  return {
    data,
    error,
  };
}