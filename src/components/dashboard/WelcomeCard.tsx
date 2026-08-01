import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Shadows, Spacing } from "@/theme";

interface WelcomeCardProps {
  title: string;
  subtitle: string;
  structure: string;
}

export default function WelcomeCard({
  title,
  subtitle,
  structure,
}: WelcomeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="domain"
            size={34}
            color={Colors.primary}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <MaterialCommunityIcons
          name="office-building"
          size={18}
          color={Colors.primary}
        />

        <Text style={styles.structure}>{structure}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    ...Shadows,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary + "15",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
  },

  subtitle: {
    marginTop: 6,
    color: Colors.textSecondary,
    lineHeight: 22,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Spacing.lg,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },

  structure: {
    marginLeft: 8,
    fontWeight: "600",
    color: Colors.primary,
  },
});
