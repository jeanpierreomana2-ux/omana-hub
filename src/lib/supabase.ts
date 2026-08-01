import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glfbqsqehwuhywnunbbp.supabase.co";
const supabaseAnonKey = "sb_publishable_I_5-hzk-d-91aQclE9xgMg_HZjeNA2T";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
