import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OMANA HUB</Text>

      <Text style={styles.subtitle}>Bienvenue sur votre plateforme.</Text>

      <Pressable style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.secondary]}
        onPress={() => router.push("/register")}
      >
        <Text style={styles.buttonText}>Créer un compte</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#F5F5F5",
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0A4D68",
    marginBottom: 15,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#666",
    marginBottom: 50,
  },

  button: {
    backgroundColor: "#0A4D68",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  secondary: {
    backgroundColor: "#2E7D32",
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
