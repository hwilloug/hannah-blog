import {
  createTheme,
  styled,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { getDesignTokens } from "./theme";

const LayoutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "stretch",
  backgroundColor: theme.palette.primary.light,
  backgroundImage:
    theme.palette.mode === "dark" ? "url('bg.png')" : "url('bg_light.png')",
  backgroundRepeat: "repeat",
  backgroundAttachment: "fixed",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery(theme.breakpoints.up("md")) ? "row" : "column",
  justifyContent: "center",
  alignItems: useMediaQuery(theme.breakpoints.up("md"))
    ? "flex-start"
    : "center",
}));

function ScrollToTopOnNavigate() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const Layout: React.FunctionComponent = (): ReactElement => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const colors = theme.palette;

  const handleDarkModeChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <ScrollToTopOnNavigate />
        <NavBar />
        <ContentContainer>
          <Outlet />
          <Aside />
        </ContentContainer>
        <Footer
          darkMode={darkMode}
          handleDarkModeChange={handleDarkModeChange}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
