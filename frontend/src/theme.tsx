import { PaletteMode, createTheme } from "@mui/material";

const theme = {
  breakpoints: {
    values: {
      xs: 591,
      sm: 765,
      md: 998,
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
            light: "#DECFD3",
            main: "#9B6F7C",
            dark: "#706677",
          },
          secondary: {
            main: "#A8BBA0",
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
