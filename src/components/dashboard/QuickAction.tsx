import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, Shadows, Spacing } from "@/theme";

interface QuickActionProps {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
  onPress?: () => void;
}

export default function QuickAction({
  title,
  icon,
  color = Colors.primary,
  onPress,
}: QuickActionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.iconContainer, { backgroundColor: color + "15" }]}>
        <MaterialCommunityIcons name={icon} size={30} color={color} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: Spacing.lg,
    alignItems: "center",
    marginBottom: Spacing.md,
    ...Shadows,
  },

  pressed: {
    opacity: 0.85,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.md,
  },

  title: {
    textAlign: "center",
    fontWeight: "600",
    color: Colors.text,
  },
});
