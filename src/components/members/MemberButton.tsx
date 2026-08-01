import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors, Shadows, Spacing } from "@/theme";

interface MemberButtonProps {
  title: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function MemberButton({
  title,
  icon,
  color = Colors.primary,
  onPress,
  disabled = false,
}: MemberButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled ? "#BDBDBD" : color,
        },
        pressed && !disabled && styles.pressed,
      ]}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color="#FFFFFF"
          style={styles.icon}
        />
      )}

      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing.md,
    ...Shadows,
  },

  pressed: {
    opacity: 0.85,
  },

  icon: {
    marginRight: 8,
  },

  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
