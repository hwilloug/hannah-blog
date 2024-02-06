import styled from "@emotion/styled";
import { ReactElement, useState } from "react";
import Navigation from "./Navigation";
import { mdiHelpCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import {
  CssProps,
  StyledIcon,
  NavigationItem,
  NavigationLink,
} from "./StyledComponents";
import { MoreVertOutlined } from "@mui/icons-material";

const NavBarContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  background-color: ${(props) => props.colors.primary.main};
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 5px 0 black;
`;

const SmallContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0 20px;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

const PoppyIcon = styled.img`
  height: 75px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
`;

const NavBar: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = theme.palette;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const smallPartial = (
    <SmallContainer>
      <HomeLink to="">
        <PoppyIcon src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy.png`} />
      </HomeLink>
      <HomeLink to="/">
        <Title>Hannah's Hobby Room</Title>
      </HomeLink>
      <RightIconContainer>
        <Button variant="contained" disableElevation onClick={handleClick}>
          <MoreVertOutlined />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} disableRipple>
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
          </MenuItem>
          <MenuItem>
            <Navigation showText />
          </MenuItem>
        </Menu>
      </RightIconContainer>
    </SmallContainer>
  );

  const defaultPartial = (
    <>
      <HomeLink to="">
        <PoppyIcon src="/poppy.png" />
      </HomeLink>
      <HomeLink to="/">
        <Title>Hannah's Hobby Room</Title>
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
