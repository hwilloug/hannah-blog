import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation from "./Navigation";
import { mdiHelpCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  CssProps,
  StyledIcon,
  NavigationItem,
  NavigationLink,
} from "./StyledComponents";

const NavBarContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: ${(props) => (props.break ? "0" : "20px")};
  background-color: ${(props) => props.colors.primary.main};
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

  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const NavBar: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = theme.palette;

  const smallPartial = (
    <>
      <NavBarContainer break={false} colors={colors}>
        <HomeLink to="/">
          <Title>Poppyland Blog</Title>
        </HomeLink>
        <RightIconContainer>
          {/*<NavigationItem colors={colors}>
            <StyledIcon path={mdiMagnify} size={1} colors={colors} />
          </NavigationItem>*/}
          <NavigationLink to="/about">
            {({ isActive }) => (
              <NavigationItem colors={colors} isActive={isActive}>
                <StyledIcon
                  path={mdiHelpCircleOutline}
                  size={1}
                  colors={colors}
                />
              </NavigationItem>
            )}
          </NavigationLink>
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
      {/* <NavigationItem colors={colors}>
        <StyledIcon path={mdiMagnify} size={1} colors={colors} />
      </NavigationItem>*/}
      <NavigationLink to="/about">
        {({ isActive }) => (
          <NavigationItem colors={colors} isActive={isActive}>
            <StyledIcon path={mdiHelpCircleOutline} size={1} colors={colors} />
          </NavigationItem>
        )}
      </NavigationLink>
    </>
  );

  return (
    <NavBarContainer break={sm} colors={colors}>
      {sm ? smallPartial : defaultPartial}
    </NavBarContainer>
  );
};

export default NavBar;
