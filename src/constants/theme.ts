import { Colors } from "./colors";
import { Spacing } from "./spacing";
import { Typography } from "./typography";

export const Theme = {
  colors: Colors,
  spacing: Spacing,
  typography: Typography,

  borderRadius: 16,

  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
};
