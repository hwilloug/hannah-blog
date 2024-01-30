import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation, { NavigationItem } from "./Navigation";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiHelpCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { BreakPointProps } from "./StyledComponents";

const NavBarContainer = styled.div<BreakPointProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: 20px;
  background-color: grey;
  min-width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const RightIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 20px;
`;

const Title = styled.span`
  font-size: 24px;
  color: white;
  margin: 0 20px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const NavBar: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const smallPartial = (
    <>
      <NavBarContainer break={false}>
        <HomeLink to="/">
          <Title>Poppyland Blog</Title>
        </HomeLink>
        <RightIconContainer>
          <NavigationItem>
            <Icon path={mdiMagnify} size={1} />
          </NavigationItem>
          <NavigationItem>
            <Icon path={mdiHelpCircleOutline} size={1} />
          </NavigationItem>
        </RightIconContainer>
      </NavBarContainer>
      <Navigation />
    </>
  );

  const defaultPartial = (
    <>
      <HomeLink to="/">
        <Title>Poppyland Blog</Title>
      </HomeLink>
      <Navigation />
      <NavigationItem>
        <Icon path={mdiMagnify} size={1} />
      </NavigationItem>
      <NavigationItem>
        <Icon path={mdiHelpCircleOutline} size={1} />
      </NavigationItem>
    </>
  );

  return (
    <NavBarContainer break={sm}>
      {sm ? smallPartial : defaultPartial}
    </NavBarContainer>
  );
};

export default NavBar;
