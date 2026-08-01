import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Member } from "@/services/member.service";
import { Colors, Shadows, Spacing } from "@/theme";

interface Props {
  member: Member;
  onPress: () => void;
}

const STATUS = {
  pending: {
    label: "En attente",
    color: "#F59E0B",
  },
  active: {
    label: "Actif",
    color: "#22C55E",
  },
  suspended: {
    label: "Suspendu",
    color: "#EF4444",
  },
  expired: {
    label: "Expiré",
    color: "#6B7280",
  },
};

export default function MemberCard({ member, onPress }: Props) {
  const status = STATUS[member.status] ?? STATUS.pending;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}
      onPress={onPress}
    >
      {member.photo_url ? (
        <Image source={{ uri: member.photo_url }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={30} color="#FFFFFF" />
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.name}>
          {member.first_name} {member.last_name}
        </Text>

        <Text style={styles.number}>{member.member_number}</Text>

        <View style={styles.row}>
          <Ionicons
            name="call-outline"
            size={15}
            color={Colors.textSecondary}
          />
          <Text style={styles.info}>{member.phone}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={15}
            color={Colors.textSecondary}
          />
          <Text style={styles.info}>{member.city || "Non renseignée"}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <View
          style={[
            styles.badge,
            {
              backgroundColor: status.color + "20",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: status.color,
              },
            ]}
          >
            {status.label}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color={Colors.textSecondary}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    ...Shadows,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginLeft: Spacing.md,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },

  number: {
    marginTop: 2,
    color: Colors.primary,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  info: {
    marginLeft: 6,
    color: Colors.textSecondary,
    fontSize: 13,
  },

  right: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 60,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
});
