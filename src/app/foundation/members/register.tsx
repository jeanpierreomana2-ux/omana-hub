import React, { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "@/lib/supabase";

import MemberHeader from "@/components/members/MemberHeader";
import MemberForm from "@/components/members/MemberForm";
import MemberButton from "@/components/members/MemberButton";

import { useForm } from "react-hook-form";

type MemberFormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  profession: string;
  motivation: string;
};

export default function RegisterScreen() {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<MemberFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      profession: "",
      motivation: "",
    },
  });

  async function onSubmit(values: MemberFormData) {
    if (!values.first_name || !values.last_name || !values.phone) {
      Alert.alert(
        "Champs obligatoires",
        "Veuillez remplir le prénom, le nom et le téléphone.",
      );
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        Alert.alert("Erreur", "Utilisateur non connecté.");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (profileError || !profile) {
        Alert.alert("Erreur", "Votre profil est introuvable.");
        return;
      }

      const memberNumber =
        "FO-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(Math.random() * 1000000)
          .toString()
          .padStart(6, "0");

      const memberData = {
        profile_id: profile.id,
        member_number: memberNumber,

        first_name: values.first_name,
        last_name: values.last_name,

        phone: values.phone,
        email: values.email,

        address: values.address,
        city: values.city,

        profession: values.profession,

        motivation: values.motivation,
      };

      const { error } = await supabase.from("members").insert([memberData]);
      if (error) {
        Alert.alert("Erreur Supabase", error.message);
        return;
      }

      Alert.alert(
        "Succès",
        "Votre demande d'adhésion a été enregistrée avec succès.",
      );

      reset();
    } catch (e: any) {
      console.log(e);

      Alert.alert("Erreur", e.message ?? "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <MemberHeader />

          <View style={styles.card}>
            <Text style={styles.title}>Formulaire d'adhésion</Text>

            <MemberForm control={control} />

            <MemberButton
              title="Enregistrer mon adhésion"
              loading={loading}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0B4F9C",
    marginBottom: 20,
    textAlign: "center",
  },
});
