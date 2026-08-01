import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control<any>;
}

export default function MemberForm({ control }: Props) {
  return (
    <View>
      <Text style={styles.label}>Nom</Text>
      <Controller
        control={control}
        name="last_name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Prénom</Text>
      <Controller
        control={control}
        name="first_name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Téléphone</Text>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="+243..."
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="email@exemple.com"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Profession</Text>
      <Controller
        control={control}
        name="profession"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Profession"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Ville</Text>
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Ville"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Province</Text>
      <Controller
        control={control}
        name="province"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Province"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Pays</Text>
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Pays"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Motivation</Text>
      <Controller
        control={control}
        name="motivation"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, styles.multiline]}
            multiline
            numberOfLines={4}
            placeholder="Pourquoi souhaitez-vous rejoindre la Fondation OMANA ?"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    marginTop: 15,
    fontWeight: "600",
    color: "#0B4F9C",
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#FFF",
  },

  multiline: {
    height: 110,
    textAlignVertical: "top",
  },
});
