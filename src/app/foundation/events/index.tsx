import { View, Text, StyleSheet } from "react-native";

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Événements</Text>
      <Text style={styles.subtitle}>
        Les événements seront bientôt disponibles.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B4F9C",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
