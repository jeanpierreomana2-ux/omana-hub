import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors, Spacing, Shadows } from "@/theme";

interface AppCardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export default function AppCard({ children, style }: AppCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows,
  },
});
