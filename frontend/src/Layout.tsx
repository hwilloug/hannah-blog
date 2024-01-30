import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { ChangeEvent, ReactElement, useState } from "react";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

const Layout: React.FunctionComponent = (): ReactElement => {
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
      <ContentContainer>
        <Outlet />
        <Aside />
      </ContentContainer>
      <Footer darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
    </LayoutContainer>
  );
};

export default Layout;
