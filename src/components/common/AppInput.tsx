import React from "react";
import { Control, Controller } from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

import { Colors, Spacing } from "@/theme";

interface AppInputProps extends TextInputProps {
  label?: string;

  // Utilisation avec react-hook-form
  control?: Control<any>;
  name?: string;

  // Icônes ou composants à gauche/droite
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function AppInput({
  label,
  control,
  name,
  leftIcon,
  rightIcon,
  ...props
}: AppInputProps) {
  // ----------- MODE SIMPLE (Recherche, Login, etc.) -----------
  if (!control || !name) {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={styles.inputContainer}>
          {leftIcon}

          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            {...props}
          />

          {rightIcon}
        </View>
      </View>
    );
  }

  // ----------- MODE REACT HOOK FORM -----------
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            {leftIcon}

            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#999"
              {...props}
            />

            {rightIcon}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },

  label: {
    marginBottom: 8,
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    minHeight: 52,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
    paddingVertical: 12,
    marginLeft: 8,
  },
});
