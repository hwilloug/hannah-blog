import { Auth0Provider } from "@auth0/auth0-react";
import { Box, createTheme, Grid, styled, ThemeProvider } from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { getDesignTokens } from "./theme";

const LayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  backgroundImage:
    theme.palette.mode === "dark" ? "url('/bg.png')" : "url('/bg_light.png')",
  backgroundRepeat: "repeat",
  backgroundAttachment: "fixed",
}));

const SkipNavLink = styled("a")({
  position: "absolute",
  background: "black",
  padding: "0.5rem 1.5rem",
  color: "white",
  transform: "translateY(-120%)",
  ":focus": {
    transform: "translateY(0)",
  },
});

const ContentGrid = styled(Grid)(({ theme }) => ({}));

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

  const handleDarkModeChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setDarkMode(!darkMode);
  };

  return (
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ThemeProvider theme={theme}>
        <SkipNavLink href="#content">Skip to content</SkipNavLink>
        <LayoutContainer>
          <ScrollToTopOnNavigate />
          <NavBar />
          <ContentGrid container spacing={2} p={"20px"} justifyContent="center">
            <Grid item xs={12} sm={8} md={7} xl={4} id="content">
              <Outlet />
            </Grid>
            <Grid item xs={0} sm={4} md={3} xl={2}>
              <Aside />
            </Grid>
          </ContentGrid>
          <Footer
            darkMode={darkMode}
            handleDarkModeChange={handleDarkModeChange}
          />
        </LayoutContainer>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default Layout;
