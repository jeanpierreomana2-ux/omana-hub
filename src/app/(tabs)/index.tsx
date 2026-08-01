import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>OMANA HUB</Text>
          <Text style={styles.slogan}>Ta réussite, notre priorité</Text>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell-outline"
            size={28}
            color="#0B2D5C"
          />
        </TouchableOpacity>
      </View>

      {/* BIENVENUE */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcome}>Bonjour Jean Pierre 👋</Text>

        <Text style={styles.description}>
          Bienvenue sur OMANA HUB. Retrouvez toutes vos activités et services
          depuis un seul endroit.
        </Text>
      </View>

      {/* MES STRUCTURES */}

      <Text style={styles.sectionTitle}>Mes Structures</Text>

      <View style={styles.structureCard}>
        <MaterialCommunityIcons
          name="office-building"
          size={30}
          color="#0F9D58"
        />
        <Text style={styles.structureText}>Fondation OMANA</Text>
      </View>

      {/* ACCES RAPIDES */}

      <Text style={styles.sectionTitle}>Accès rapides</Text>

      <View style={styles.grid}>
        <MenuItem icon="account-group" label="Membres" />

        <MenuItem icon="card-account-details" label="Ma carte" />

        <MenuItem icon="school" label="Formations" />

        <MenuItem icon="calendar-month" label="Évènements" />

        <MenuItem icon="newspaper" label="Actualités" />

        <MenuItem icon="gift" label="Dons" />
      </View>

      {/* STATISTIQUES */}

      <Text style={styles.sectionTitle}>Statistiques</Text>

      <View style={styles.stats}>
        <StatItem number="245" title="Membres" />

        <StatItem number="18" title="Formations" />

        <StatItem number="9" title="Projets" />

        <StatItem number="5" title="Partenaires" />
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label }: any) {
  return (
    <TouchableOpacity style={styles.box}>
      <MaterialCommunityIcons name={icon} size={34} color="#0B2D5C" />
      <Text style={styles.boxText}>{label}</Text>
    </TouchableOpacity>
  );
}

function StatItem({ number, title }: any) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B2D5C",
  },

  slogan: {
    color: "#64748B",
  },

  welcomeCard: {
    backgroundColor: "#0B2D5C",
    borderRadius: 20,
    padding: 22,
    marginBottom: 25,
  },

  welcome: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#E2E8F0",
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#1E293B",
  },

  structureCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    elevation: 2,
  },

  structureText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 24,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },

  boxText: {
    marginTop: 10,
    fontWeight: "600",
  },

  stats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
  },

  statNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F9D58",
  },

  statTitle: {
    marginTop: 5,
    color: "#64748B",
  },
});
