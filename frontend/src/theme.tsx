import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 591,
      sm: 765,
      md: 998,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: "#DECFD3",
      main: "#9B6F7C",
      dark: "#706677",
      contrastText: "black",
    },
    secondary: {
      main: "#A8BBA0",
      contrastText: "black",
    },
  },
});
