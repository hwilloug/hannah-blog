import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { ChangeEvent, ReactElement, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Layout: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkModeChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setDarkMode(!darkMode);
  };

  return (
    <LayoutContainer>
      <NavBar />
      {md ? (
        <ContentContainer>
          <Outlet />
          <Aside />
        </ContentContainer>
      ) : (
        <>
          <Outlet />
          <Aside />
        </>
      )}
      <Footer darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
    </LayoutContainer>
  );
};

export default Layout;
