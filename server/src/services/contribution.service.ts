import { supabase } from "../config/supabase";

export async function getContributions() {
  const { data, error } = await supabase
    .from("member_contributions")
    .select(
      `
      *,
      members(
        id,
        first_name,
        last_name,
        member_number
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function getContributionById(id: string) {
  const { data, error } = await supabase
    .from("member_contributions")
    .select(
      `
      *,
      members(
        id,
        first_name,
        last_name,
        member_number
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function getContributionsByMember(memberId: string) {
  const { data, error } = await supabase
    .from("member_contributions")
    .select("*")
    .eq("member_id", memberId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function createContribution(contribution: any) {
  const receiptNumber =
    "FO-REC-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");

  const { data, error } = await supabase
    .from("member_contributions")
    .insert({
      ...contribution,
      receipt_number: receiptNumber,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updateContribution(id: string, contribution: any) {
  const { data, error } = await supabase
    .from("member_contributions")
    .update(contribution)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteContribution(id: string) {
  const { error } = await supabase
    .from("member_contributions")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return {
    success: true,
  };
}
