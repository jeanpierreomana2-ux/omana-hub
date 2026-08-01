import { View, Text, StyleSheet } from "react-native";

export default function MemberCardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Carte de membre</Text>
      <Text style={styles.subtitle}>Votre carte numérique apparaîtra ici.</Text>
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
    color: "#666",
    textAlign: "center",
  },
});
