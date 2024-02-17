import { ContactMail } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { Divider, styled, Switch, useTheme } from "@mui/material";
import { ChangeEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { SocialIcon, StyledButton, UnstyledLink } from "./StyledComponents";

const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "20px",
  color: "white",
}));

const FooterRow = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "10px 0",
});

const BuyMeABookButton = styled(StyledButton)({
  "@keyframes wiggle": {
    "0%": {},
    "7%": {
      transform: "rotateZ(0)",
    },
    "15%": {
      transform: "rotateZ(-10deg)",
    },
    "20%": {
      transform: "rotateZ(7deg)",
    },
    "25%": {
      transform: "rotateZ(-7deg)",
    },
    "30%": {
      transform: "rotateZ(4deg)",
    },
    "35%": {
      transform: "rotateZ(-2deg)",
    },
    "40%": {},
    "100%": {
      transform: "rotateZ(0)",
    },
  },
  margin: "0 20px",
  animation: "wiggle 2s linear infinite",
});

const Copyright = styled("div")({
  flexGrow: 4,
  textAlign: "center",
});

const DarkModeToggleContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const SocialContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginLeft: "10px",
  a: {
    color: "white",
  },
}));

const SitemapContainer = styled("div")(({ theme }) => ({
  display: "flex",
  a: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.main
        : theme.palette.secondary.dark,

    ":hover": {
      textDecoration: "underline",
    },
  },
}));

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
    <FooterContainer>
      <FooterRow>
        <UnstyledLink
          to="https://www.buymeacoffee.com/hannahjanew"
          target="_blank"
        >
          <BuyMeABookButton>📖 Buy Me a Book</BuyMeABookButton>
        </UnstyledLink>
        <SocialContainer>
          <a href="https://twitter.com/HannahHobbyRoom" target="_blank">
            <SocialIcon>
              <XIcon />
            </SocialIcon>
          </a>
          <a href="mailto: support@hannahshobbyroom.com">
            <SocialIcon>
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
        <SitemapContainer>
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
