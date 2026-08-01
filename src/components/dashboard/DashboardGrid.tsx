import React from "react";
import { View, StyleSheet } from "react-native";
import { Spacing } from "@/theme";
import StatCard from "./StatCard";

type DashboardGridProps = {
  members: number;
  trainings: number;
  events: number;
  donations: number;
};

export default function DashboardGrid({
  members,
  trainings,
  events,
  donations,
}: DashboardGridProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <StatCard title="Membres" value={members} icon="people" />

        <StatCard
          title="Formations"
          value={trainings}
          icon="school"
          color="#16A34A"
        />
      </View>

      <View style={styles.row}>
        <StatCard
          title="Événements"
          value={events}
          icon="calendar"
          color="#F59E0B"
        />

        <StatCard
          title="Dons"
          value={`${donations.toLocaleString()} $`}
          icon="cash"
          color="#8B5CF6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },

  row: {
    flexDirection: "row",
    gap: Spacing.md,
  },
});
