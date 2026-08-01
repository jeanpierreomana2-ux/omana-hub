import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { getMember, Member } from "@/services/member.service";
import { Colors, Spacing } from "@/theme";

const STATUS = {
  pending: { label: "En attente", color: "#F59E0B" },
  active: { label: "Actif", color: "#16A34A" },
  suspended: { label: "Suspendu", color: "#DC2626" },
  expired: { label: "Expiré", color: "#6B7280" },
};

export default function MemberDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMember();
  }, []);

  async function loadMember() {
    try {
      if (!id) return;

      const data = await getMember(id);
      setMember(data);
    } catch (error) {
      Alert.alert("Erreur", "Impossible de charger le membre.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!member) {
    return (
      <View style={styles.center}>
        <Text>Membre introuvable.</Text>
      </View>
    );
  }

  const status = STATUS[member.status as keyof typeof STATUS] ?? STATUS.pending;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={60} color="#FFFFFF" />
      </View>

      <Text style={styles.name}>
        {member.first_name} {member.last_name}
      </Text>

      <Text style={styles.memberNumber}>{member.member_number}</Text>

      <View style={[styles.status, { backgroundColor: status.color }]}>
        <Text style={styles.statusText}>{status.label}</Text>
      </View>

      <View style={styles.card}>
        <Info label="Téléphone" value={member.phone} />
        <Info label="Email" value={member.email} />
        <Info label="Adresse" value={member.address} />
        <Info label="Ville" value={member.city} />
        <Info label="Province" value={member.province} />
        <Info label="Pays" value={member.country} />
        <Info label="Profession" value={member.profession} />
        <Info label="Niveau d'étude" value={member.education_level} />
        <Info label="Motivation" value={member.motivation} />
        <Info label="Contact d'urgence" value={member.emergency_contact} />
        <Info label="Téléphone d'urgence" value={member.emergency_phone} />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push(`/foundation/members/card?id=${member.id}`)}
      >
        <Ionicons name="card-outline" size={20} color="#FFF" />

        <Text style={styles.buttonText}>Voir la carte de membre</Text>
      </Pressable>
    </ScrollView>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "Non renseigné"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  content: {
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 24,
    fontWeight: "700",
  },

  memberNumber: {
    textAlign: "center",
    color: Colors.primary,
    marginTop: 6,
    fontWeight: "600",
  },

  status: {
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  statusText: {
    color: "#FFF",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginTop: 25,
  },

  infoRow: {
    marginBottom: 14,
  },

  label: {
    fontWeight: "700",
    color: "#555",
  },

  value: {
    marginTop: 4,
    color: "#111",
  },

  button: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    marginLeft: 10,
  },
});
