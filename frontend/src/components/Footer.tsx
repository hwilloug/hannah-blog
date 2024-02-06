import styled from "@emotion/styled";
import { ChangeEvent, ReactElement } from "react";
import {
  ColorProps,
  SocialIcon,
  StyledButton,
  StyledIcon,
  UnstyledLink,
} from "./StyledComponents";
import { Divider, Switch, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { ContactMail } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
  flex-wrap: wrap;

  margin: 10px 0;
`;

const BuyMeABookButton = styled(StyledButton)`
  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-10deg);
    }
    20% {
      transform: rotateZ(7deg);
    }
    25% {
      transform: rotateZ(-7deg);
    }
    30% {
      transform: rotateZ(4deg);
    }
    35% {
      transform: rotateZ(-2deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }

  margin: 0 20px;
  animation: wiggle 2s linear infinite;
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

const SitemapContainer = styled.div<ColorProps>`
  display: flex;

  a {
    color: ${({ colors }) => colors.secondary.main};
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
        <UnstyledLink
          to="https://www.buymeacoffee.com/hannahjanew"
          target="_blank"
        >
          <BuyMeABookButton colors={colors}>📖 Buy Me a Book</BuyMeABookButton>
        </UnstyledLink>
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
        <SitemapContainer colors={colors}>
          <p>Sitemap</p>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/food">
              <li>Food</li>
            </Link>
            <Link to="/gardening">
              <li>Gardening</li>
            </Link>
            <Link to="/crafts">
              <li>Crafts</li>
            </Link>
            <Link to="/coding">
              <li>Coding</li>
            </Link>
            <Link to="/books">
              <li>Books</li>
            </Link>
            <Link to="/languages">
              <li>Languages</li>
            </Link>
          </ul>
        </SitemapContainer>
      </FooterRow>
    </FooterContainer>
  );
};

export default Footer;
