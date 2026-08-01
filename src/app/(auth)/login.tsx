import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert(
        "Champs obligatoires",
        "Veuillez saisir votre adresse e-mail et votre mot de passe.",
      );
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      Alert.alert("Succès", "Connexion réussie !");

      router.replace("/(tabs)");
    } catch (err: any) {
      Alert.alert(
        "Connexion impossible",
        err.message ?? "Une erreur est survenue.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Se connecter</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() =>
          Alert.alert(
            "Mot de passe oublié",
            "Cette fonctionnalité sera disponible prochainement.",
          )
        }
      >
        <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
        <Text style={styles.link}>Vous n'avez pas de compte ? S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0B8A44",
    marginBottom: 35,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    padding: 15,
    marginBottom: 18,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },

  button: {
    backgroundColor: "#0B8A44",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  forgotPassword: {
    marginTop: 18,
  },

  forgotText: {
    textAlign: "center",
    color: "#0A4D68",
    fontSize: 15,
  },

  link: {
    marginTop: 25,
    textAlign: "center",
    color: "#0B8A44",
    fontWeight: "600",
    fontSize: 15,
  },
});
