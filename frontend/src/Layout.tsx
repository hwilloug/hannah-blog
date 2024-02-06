import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BreakPointProps, ColorProps } from "./components/StyledComponents";
import { getDesignTokens } from "./theme";

const LayoutContainer = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: stretch;
  background-color: ${(props) => props.colors.primary.light};
`;

const ContentContainer = styled.div<BreakPointProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "row" : "column")};
  justify-content: center;
  align-items: ${(props) => (props.break ? "flex-start" : "center")};
`;

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
      <LayoutContainer colors={colors}>
        <ScrollToTopOnNavigate />
        <NavBar />
        <ContentContainer break={md}>
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
