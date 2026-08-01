import { api } from "./api";
import { getAccessToken } from "./auth.service";

export interface Member {
  id: string;
  profile_id: string;

  member_number: string;

  first_name: string;
  last_name: string;

  gender?: string;
  birth_date?: string;

  phone?: string;
  email?: string;

  address?: string;
  city?: string;
  province?: string;
  country?: string;

  profession?: string;

  education_level?: string;

  motivation?: string;

  photo_url?: string;

  status: string;

  created_at?: string;
}

export async function getMembers(): Promise<Member[]> {
  const token = await getAccessToken();

  return await api.get("/members", token);
}
