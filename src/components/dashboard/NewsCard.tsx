import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, Shadows, Spacing } from "@/theme";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface NewsCardProps {
  news: NewsItem;
  onPress?: () => void;
}

export default function NewsCard({ news, onPress }: NewsCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="newspaper-variant-outline"
          size={26}
          color={Colors.primary}
        />

        <Text style={styles.date}>{news.date}</Text>
      </View>

      <Text style={styles.title}>{news.title}</Text>

      <Text style={styles.description}>{news.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows,
  },

  pressed: {
    opacity: 0.85,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.sm,
  },

  date: {
    color: Colors.textSecondary,
    fontSize: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: Spacing.sm,
  },

  description: {
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});
