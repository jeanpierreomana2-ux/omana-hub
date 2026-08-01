import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Spacing, Typography } from "@/theme";

type DashboardHeaderProps = {
  userName: string;
  structure: string;
  onNotifications?: () => void;
  onProfile?: () => void;
};

export default function DashboardHeader({
  userName,
  structure,
  onNotifications,
  onProfile,
}: DashboardHeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Bonjour 👋</Text>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.structure}>{structure}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={onNotifications}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={Colors.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onProfile}>
          <Ionicons
            name="person-circle-outline"
            size={34}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },

  greeting: {
    fontSize: Typography.body,
    color: Colors.textSecondary,
  },

  name: {
    fontSize: Typography.title,
    fontWeight: "700",
    color: Colors.primary,
    marginTop: 4,
  },

  structure: {
    fontSize: Typography.body,
    color: Colors.secondary,
    marginTop: 4,
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    marginLeft: 12,
  },
});
