import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { Colors, Shadows, Spacing } from "@/theme";

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
  date: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>Activités récentes</Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: (item.color || Colors.primary) + "15",
                },
              ]}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={22}
                color={item.color || Colors.primary}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.description}>{item.description}</Text>
            </View>

            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Aucune activité récente.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    ...Shadows,
  },

  header: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Spacing.md,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.sm,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  title: {
    fontWeight: "600",
    color: Colors.text,
  },

  description: {
    marginTop: 2,
    color: Colors.textSecondary,
    fontSize: 13,
  },

  date: {
    color: Colors.textSecondary,
    fontSize: 12,
  },

  separator: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.sm,
  },

  empty: {
    textAlign: "center",
    color: Colors.textSecondary,
    paddingVertical: Spacing.lg,
  },
});
