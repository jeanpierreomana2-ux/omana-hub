export interface Member {
  id?: string;

  profile_id?: string;

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

  emergency_contact?: string;
  emergency_phone?: string;

  motivation?: string;

  photo_url?: string;

  status?: "pending" | "active" | "suspended" | "expired";

  structure_id?: string;

  membership_date?: string;

  created_at?: string;
}
