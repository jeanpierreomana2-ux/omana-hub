import { useCallback, useEffect, useState } from "react";

import { Member, getMembers } from "@/services/member.service";

export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getMembers();

      setMembers(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    members,
    loading,
    refresh: load,
  };
}
