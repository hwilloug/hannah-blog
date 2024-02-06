import styled from "@emotion/styled";
import { ChangeEvent, ReactElement } from "react";
import {
  ColorProps,
  SocialIcon,
  StyledButton,
  StyledIcon,
} from "./StyledComponents";
import { Switch, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";

const FooterContainer = styled.div<ColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ colors }) => colors.primary.main};
  padding: 20px;
  color: white;
`;

const BuyMeABookButton = styled(StyledButton)`
  margin: 0 20px;
`;

const Copyright = styled.div`
  flex-grow: 4;
  text-align: center;
`;

const DarkModeToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialContainer = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;

  a {
    color: white;
  }
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
  const theme = useTheme();
  const colors = theme.palette;
  return (
    <FooterContainer colors={colors}>
      <BuyMeABookButton colors={colors}>📖 Buy Me a Book</BuyMeABookButton>
      <SocialContainer colors={colors}>
        <a href="https://twitter.com/HannahHobbyRoom" target="_blank">
          <SocialIcon colors={colors}>
            <XIcon />
          </SocialIcon>
        </a>
      </SocialContainer>
      <Copyright>© {new Date().getFullYear()} hannahshobbyroom.com</Copyright>
      <DarkModeToggleContainer>
        <p>Dark Mode</p>
        <Switch
          checked={darkMode}
          onChange={handleDarkModeChange}
          color="secondary"
        />
      </DarkModeToggleContainer>
    </FooterContainer>
  );
};

export default Footer;
