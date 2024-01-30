import styled from "@emotion/styled";
import { ChangeEvent, ReactElement } from "react";
import { StyledButton } from "./StyledComponents";
import { Switch } from "@mui/material";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: grey;
  padding: 20px;
`;

const BuyMeABookButton = styled(StyledButton)``;

const Copyright = styled.div``;

const DarkModeToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface FooterProps {
  darkMode: boolean;
  handleDarkModeChange: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}

const Footer: React.FunctionComponent<FooterProps> = ({
  darkMode,
  handleDarkModeChange,
}): ReactElement => {
  return (
    <FooterContainer>
      <BuyMeABookButton>📖 Buy Me a Book</BuyMeABookButton>
      <Copyright>© {new Date().getFullYear()} Poppyland</Copyright>
      <DarkModeToggleContainer>
        <p>Dark Mode</p>
        <Switch checked={darkMode} onChange={handleDarkModeChange} />
      </DarkModeToggleContainer>
    </FooterContainer>
  );
};

export default Footer;
