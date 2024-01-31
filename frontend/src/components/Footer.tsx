import styled from "@emotion/styled";
import { ChangeEvent, ReactElement } from "react";
import { ColorProps, StyledButton } from "./StyledComponents";
import { Switch, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const colors = theme.palette;
  return (
    <FooterContainer colors={colors}>
      <BuyMeABookButton colors={colors}>📖 Buy Me a Book</BuyMeABookButton>
      <Copyright>© {new Date().getFullYear()} Poppyland</Copyright>
      <DarkModeToggleContainer>
        <p>Dark Mode</p>
        <Switch checked={darkMode} onChange={handleDarkModeChange} />
      </DarkModeToggleContainer>
    </FooterContainer>
  );
};

export default Footer;
