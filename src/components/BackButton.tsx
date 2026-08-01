import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BackButton() {
  return (
    <Pressable style={styles.container} onPress={() => router.back()}>
      <MaterialCommunityIcons name="arrow-left" size={24} color="#2E7D32" />

      <Text style={styles.text}>Retour</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  text: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "600",
    color: "#2E7D32",
  },
});
