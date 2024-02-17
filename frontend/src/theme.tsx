import { PaletteMode } from "@mui/material";

const theme = {
  breakpoints: {
    values: {
      xs: 591,
      sm: 805,
      md: 1026,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  ...theme,
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: "#D3DECF",
            main: "#7F9679",
            dark: "#4B5646",
          },
          secondary: {
            light: "#DECFD3",
            main: "#BD9FA8",
            dark: "#706677",
          },
        }
      : {
          primary: {
            main: "#492E1C",
            dark: "#29190E",
          },
          secondary: {
            main: "#A8BBA0",
          },
        }),
  },
});
