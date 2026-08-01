import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppInput from "@/components/common/AppInput";
import MemberButton from "@/components/members/MemberButton";
import MemberCard from "@/components/members/MemberCard";

import { getMembers, Member } from "@/services/member.service";

export default function MembersScreen() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  async function loadMembers() {
    try {
      const data = await getMembers();

      console.log("MEMBRES :", data);

      setMembers(data);

      console.log("========== MEMBERS ==========");
      console.log(data);
      console.log("=============================");

      setMembers(data);
    } catch (error) {
      console.log("ERREUR MEMBERS");
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadMembers();
  }, []);

  const filteredMembers = useMemo(() => {
    if (!search.trim()) return members;

    const keyword = search.toLowerCase();

    return members.filter((member) => {
      return (
        member.first_name?.toLowerCase().includes(keyword) ||
        member.last_name?.toLowerCase().includes(keyword) ||
        member.member_number?.toLowerCase().includes(keyword) ||
        member.phone?.toLowerCase().includes(keyword)
      );
    });
  }, [members, search]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0B4F9C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👥 Membres</Text>

        <MemberButton
          icon="account-plus"
          title="Nouveau"
          onPress={() => router.push("/foundation/members/register")}
        />
      </View>

      <AppInput
        placeholder="Rechercher un membre..."
        value={search}
        onChangeText={setSearch}
        leftIcon={<Ionicons name="search" size={20} color="#999" />}
      />

      <FlatList
        data={filteredMembers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              loadMembers();
            }}
          />
        }
        renderItem={({ item }) => (
          <MemberCard
            member={item}
            onPress={() => router.push(`/foundation/members/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="people-outline" size={70} color="#CCC" />
            <Text style={styles.emptyText}>Aucun membre trouvé</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0B4F9C",
  },

  empty: {
    marginTop: 100,
    alignItems: "center",
  },

  emptyText: {
    marginTop: 20,
    color: "#888",
    fontSize: 16,
  },
});
