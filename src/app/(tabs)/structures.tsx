import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const structures = [
  {
    title: "Fondation OMANA",
    description: "Développement communautaire",
    icon: "hand-heart",
    color: "#0B4F9C",
    route: "/foundation",
  },
  {
    title: "KIN-LIVE STUDIO",
    description: "Production audiovisuelle",
    icon: "video",
    color: "#D81B60",
    route: "/kin-live",
  },
  {
    title: "Omana Tech",
    description: "Solutions numériques",
    icon: "laptop",
    color: "#00897B",
    route: "/omana-tech",
  },
  {
    title: "Omana Trading Company",
    description: "Commerce & Logistique",
    icon: "truck-fast",
    color: "#F57C00",
    route: "/trading",
  },
];

export default function StructuresScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nos Structures</Text>

      <Text style={styles.subtitle}>
        Choisissez l'espace que vous souhaitez consulter.
      </Text>

      {structures.map((item, index) => (
        <Pressable
          key={index}
          style={[styles.card, { borderLeftColor: item.color }]}
          onPress={() => {
            if (item.route === "/foundation") {
              router.push("/foundation");
            }
          }}
        >
          <MaterialCommunityIcons
            name={item.icon as any}
            size={42}
            color={item.color}
          />

          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>

          <MaterialCommunityIcons name="chevron-right" size={28} color="#999" />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B4F9C",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 6,
    elevation: 3,
  },

  textContainer: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
