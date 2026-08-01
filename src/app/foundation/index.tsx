import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import { getDashboardStats } from "@/services/dashboard.service";

const services = [
  {
    title: "Nouveau membre",
    icon: "account-plus",
    color: "#1565C0",
    route: "/foundation/members/register",
  },
  {
    title: "Liste des membres",
    icon: "account-group",
    color: "#1976D2",
    route: "/foundation/members",
  },
  {
    title: "Formations",
    icon: "school",
    color: "#2E7D32",
    route: "/foundation/trainings",
  },
  {
    title: "Évènements",
    icon: "calendar",
    color: "#EF6C00",
    route: "/foundation/events",
  },
  {
    title: "Actualités",
    icon: "newspaper",
    color: "#6A1B9A",
    route: "/foundation/news",
  },
  {
    title: "Faire un don",
    icon: "heart",
    color: "#D32F2F",
    route: "/foundation/donations",
  },
];

const domaines = [
  "📚 Éducation",
  "🏥 Santé",
  "🌱 Agriculture",
  "👨‍👩‍👧 Genre & Famille",
  "🎭 Culture",
  "💻 Médias & Innovation",
];

export default function FoundationDashboard() {
  const [stats, setStats] = useState({
    members: 0,
    active: 0,
    pending: 0,
    suspended: 0,
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header
        userName="Jean Pierre OMANA"
        role="Administrateur Général"
        notificationCount={5}
      />

      <Text style={styles.title}>🏛 Fondation OMANA</Text>

      <Text style={styles.slogan}>Ta réussite, notre priorité</Text>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Bienvenue dans votre espace Fondation
        </Text>

        <Text style={styles.bannerText}>
          Gérez les membres, les formations, les événements et les dons depuis
          un seul tableau de bord.
        </Text>
      </View>

      <Text style={styles.section}>Statistiques</Text>

      <View style={styles.statsGrid}>
        <StatCard
          title="Membres"
          value={stats.members}
          icon="account-group"
          color="#1565C0"
        />

        <StatCard
          title="Actifs"
          value={stats.active}
          icon="check-circle"
          color="#2E7D32"
        />

        <StatCard
          title="En attente"
          value={stats.pending}
          icon="clock-outline"
          color="#F9A825"
        />

        <StatCard
          title="Suspendus"
          value={stats.suspended}
          icon="close-circle"
          color="#D32F2F"
        />
      </View>

      <Text style={styles.section}>Accès rapide</Text>

      <View style={styles.grid}>
        {services.map((item) => (
          <Pressable
            key={item.title}
            style={styles.serviceCard}
            onPress={() => router.push(item.route as any)}
          >
            <MaterialCommunityIcons
              name={item.icon as any}
              size={34}
              color={item.color}
            />

            <Text style={styles.serviceTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.section}>Domaines d'intervention</Text>

      <View style={styles.grid}>
        {domaines.map((item) => (
          <View key={item} style={styles.domainCard}>
            <Text style={styles.domainText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  content: {
    padding: 20,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0B4F9C",
  },

  slogan: {
    color: "#666",
    marginBottom: 20,
    fontSize: 16,
  },

  banner: {
    backgroundColor: "#0B4F9C",
    borderRadius: 22,
    padding: 20,
    marginBottom: 25,
    elevation: 4,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  bannerText: {
    color: "#FFFFFF",
    marginTop: 10,
    lineHeight: 22,
    fontSize: 15,
  },

  section: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
    marginTop: 10,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  serviceCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    elevation: 3,
  },

  serviceTitle: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "600",
    color: "#222",
    fontSize: 14,
  },

  domainCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  domainText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
    fontSize: 15,
  },
});
