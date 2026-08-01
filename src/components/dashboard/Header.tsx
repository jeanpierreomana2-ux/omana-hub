import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  userName: string;
  role: string;
  avatar?: string;
  notificationCount?: number;
}

export default function Header({
  userName,
  role,
  avatar,
  notificationCount = 0,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Informations utilisateur */}

      <View style={styles.left}>
        <Text style={styles.greeting}>Bonjour 👋</Text>

        <Text style={styles.name}>{userName}</Text>

        <Text style={styles.role}>{role}</Text>
      </View>

      {/* Notifications + Avatar */}

      <View style={styles.right}>
        <Pressable style={styles.notification}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={26}
            color="#0B4F9C"
          />

          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </Pressable>

        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <MaterialCommunityIcons name="account" size={34} color="#FFFFFF" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  left: {
    flex: 1,
  },

  greeting: {
    fontSize: 15,
    color: "#666",
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0B4F9C",
    marginTop: 2,
  },

  role: {
    marginTop: 4,
    color: "#999",
    fontSize: 14,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  notification: {
    marginRight: 18,
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#E53935",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "700",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },

  avatarPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#0B4F9C",
    justifyContent: "center",
    alignItems: "center",
  },
});
