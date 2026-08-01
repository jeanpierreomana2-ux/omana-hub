import {
    DashboardStats,
    getDashboardStats,
} from "@/services/dashboard.service";
import { useCallback, useEffect, useState } from "react";

const defaultStats: DashboardStats = {
  members: 0,
  trainings: 0,
  events: 0,
  donations: 0,
};

export function useDashboard() {
  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getDashboardStats();
      setStats(data);
    } catch (err) {
      console.error(err);
      setError("Impossible de charger les statistiques.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  return {
    stats,
    loading,
    error,
    refresh: loadStats,
  };
}
