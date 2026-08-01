import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function ProfileScreen() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/(auth)/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      setProfile(data);
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/(auth)/welcome");
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0B8A44" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>

      <Text style={styles.label}>Nom complet</Text>
      <Text style={styles.value}>{profile?.full_name}</Text>

      <Text style={styles.label}>Téléphone</Text>
      <Text style={styles.value}>{profile?.phone || "-"}</Text>

      <Text style={styles.label}>Rôle</Text>
      <Text style={styles.value}>{profile?.role}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B8A44",
    marginBottom: 30,
  },

  label: {
    fontWeight: "bold",
    marginTop: 15,
    color: "#555",
  },

  value: {
    fontSize: 18,
    marginTop: 5,
  },

  button: {
    marginTop: 40,
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
