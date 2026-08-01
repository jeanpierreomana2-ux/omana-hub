import { api } from "./api";

export interface Member {
  id: string;
  profile_id: string;

  member_number: string;

  first_name: string;
  last_name: string;

  phone?: string;
  email?: string;

  address?: string;
  city?: string;
  province?: string;
  country?: string;

  profession?: string;
  motivation?: string;

  photo_url?: string;

  status: "pending" | "active" | "suspended" | "expired";

  created_at?: string;
}

export async function getMembers(): Promise<Member[]> {
  return await api.get("/members");
}

export async function getMember(id: string): Promise<Member> {
  return await api.get(`/members/${id}`);
}

export async function createMember(member: Partial<Member>) {
  return await api.post("/members", member);
}

export async function updateMember(id: string, member: Partial<Member>) {
  return await api.put(`/members/${id}`, member);
}

export async function deleteMember(id: string) {
  return await api.delete(`/members/${id}`);
}
