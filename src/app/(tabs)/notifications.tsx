import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors, Spacing } from "@/theme";

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>

      <Text style={styles.subtitle}>
        Toutes les activités importantes de vos structures.
      </Text>

      <View style={styles.card}>
        <MaterialCommunityIcons
          name="bell-ring-outline"
          size={40}
          color={Colors.primary}
        />

        <Text style={styles.emptyTitle}>Aucune notification</Text>

        <Text style={styles.emptyText}>
          Les nouvelles notifications apparaîtront ici.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.primary,
  },

  subtitle: {
    marginTop: 4,
    marginBottom: Spacing.xl,
    color: Colors.textSecondary,
  },

  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.xl,
    alignItems: "center",
  },

  emptyTitle: {
    marginTop: Spacing.md,
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },

  emptyText: {
    marginTop: Spacing.sm,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
