import { supabase } from "@/lib/supabase";

export interface DashboardStats {
  members: number;
  active: number;
  pending: number;
  suspended: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const [total, active, pending, suspended] = await Promise.all([
    supabase.from("members").select("*", { count: "exact", head: true }),

    supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "active"),

    supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending"),

    supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "suspended"),
  ]);

  return {
    members: total.count ?? 0,
    active: active.count ?? 0,
    pending: pending.count ?? 0,
    suspended: suspended.count ?? 0,
  };
}
