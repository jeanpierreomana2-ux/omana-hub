import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Spacing } from "@/theme";

interface MemberHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function MemberHeader({
  title = "Devenir membre",
  subtitle = "Fondation OMANA",
}: MemberHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="account-plus"
          size={42}
          color={Colors.primary}
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: Spacing.xl,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.primary + "15",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: Spacing.md,
    fontSize: 28,
    fontWeight: "700",
    color: Colors.primary,
  },

  subtitle: {
    marginTop: Spacing.xs,
    color: Colors.textSecondary,
    fontSize: 15,
  },
});
