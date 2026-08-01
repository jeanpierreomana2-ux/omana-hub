import { View, Text, StyleSheet } from "react-native";

export default function DonationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Dons</Text>
      <Text style={styles.subtitle}>
        Le module de dons sera bientôt disponible.
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
