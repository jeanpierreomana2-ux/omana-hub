import { supabase } from "../config/supabase";

export async function getMembers() {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getMemberById(id: string) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createMember(member: any) {
  const { data, error } = await supabase
    .from("members")
    .insert(member)
    .select()
    .single();

  if (error) throw error;

  return data;
}
