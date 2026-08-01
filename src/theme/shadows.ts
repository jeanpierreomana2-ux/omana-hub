import { Platform } from "react-native";

export const Shadows = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  android: {
    elevation: 5,
  },
  default: {},
});
