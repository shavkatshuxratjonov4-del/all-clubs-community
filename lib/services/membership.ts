import { supabase } from "@/lib/supabase/client";

export type MembershipStatus =
  | "pending"
  | "active"
  | "rejected"
  | "left"
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
    console.error(error);
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
    .select()
    .single();

  return {
    data,
    error,
  };
}

/**
 * Clubdan chiqish
 */
export async function leaveClub(
  clubId: string,
  profileId: string
) {
  return await supabase
    .from("club_members")
    .update({
      status: "left",
      left_at: new Date().toISOString(),
    })
    .eq("club_id", clubId)
    .eq("profile_id", profileId);
}