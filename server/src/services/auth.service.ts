import { supabase } from "../config/supabase";

export async function getCurrentUser(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select(
      `
      *,
      roles(name, code),
      structures(name, code)
    `,
    )
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
