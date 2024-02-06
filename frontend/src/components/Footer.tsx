import styled from "@emotion/styled";
import { ChangeEvent, ReactElement } from "react";
import {
  ColorProps,
  SocialIcon,
  StyledButton,
  StyledIcon,
} from "./StyledComponents";
import { Divider, Switch, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { ContactMail } from "@mui/icons-material";

const FooterContainer = styled.div<ColorProps>`
  background-color: ${({ colors }) => colors.primary.main};
  padding: 20px;
  color: white;
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
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
      <FooterRow>
        <BuyMeABookButton colors={colors}>📖 Buy Me a Book</BuyMeABookButton>
        <SocialContainer colors={colors}>
          <a href="https://twitter.com/HannahHobbyRoom" target="_blank">
            <SocialIcon colors={colors}>
              <XIcon />
            </SocialIcon>
          </a>
          <a href="mailto: support@hannahwilloughby.dev">
            <SocialIcon colors={theme.palette}>
              <ContactMail />
            </SocialIcon>
          </a>
        </SocialContainer>
        <Copyright>
          © {new Date().getFullYear()} hannahshobbyroom.com
        </Copyright>
        <DarkModeToggleContainer>
          <p>Dark Mode</p>
          <Switch
            checked={darkMode}
            onChange={handleDarkModeChange}
            color="secondary"
          />
        </DarkModeToggleContainer>
      </FooterRow>
      <Divider />
      <FooterRow>
        <div>
          <p>Sitemap</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <ul>
              <li>Food</li>
              <li>Gardening</li>
              <li>Crafts</li>
              <li>Coding</li>
              <li>Books</li>
              <li>Languages</li>
            </ul>
          </ul>
        </div>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
