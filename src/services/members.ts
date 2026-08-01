import { supabase } from "@/lib/supabase";
import { Member } from "@/types/member";

export async function createMember(member: Member) {
  return await supabase.from("members").insert([member]).select().single();
}

export async function getMyMember(profileId: string) {
  return await supabase
    .from("members")
    .select("*")
    .eq("profile_id", profileId)
    .maybeSingle();
}

export async function updateMember(id: string, member: Partial<Member>) {
  return await supabase
    .from("members")
    .update(member)
    .eq("id", id)
    .select()
    .single();
}
