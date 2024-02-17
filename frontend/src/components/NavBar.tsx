import { mdiHelpCircleOutline } from "@mdi/js";
import { MoreVertOutlined } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { NavigationItem, NavigationLink, StyledIcon } from "./StyledComponents";

const NavBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery(theme.breakpoints.down("sm")) ? "column" : "row",
  backgroundColor: theme.palette.primary.main,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  boxShadow: "0 0 5px 0 black",
}));

const MediumContainer = styled("div")({
  minWidth: "100%",
});

const MediumContainerOne = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const MediumContainerTwo = styled("div")({
  textAlign: "center",
  marginTop: "-20px",
});

const SmallContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const RightIconContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  margin: "0 20px",
});

const Title = styled("h1")({
  fontSize: "24px",
  color: "white",
  margin: "0 20px",
  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
});

const PoppyIcon = styled("img")({
  height: "75px",
});

const HomeLink = styled(Link)({
  textDecoration: "none",
});

const NavBar: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

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
                <NavigationItem isActive={isActive} isFilled>
                  <StyledIcon path={mdiHelpCircleOutline} size={1} />
                </NavigationItem>
              )}
            </NavigationLink>
            <Navigation showText filled />
          </MenuItem>
        </Menu>
      </RightIconContainer>
    </SmallContainer>
  );

  const defaultPartial = (
    <MediumContainer>
      <MediumContainerOne>
        <MediumContainerOne>
          <HomeLink to="">
            <PoppyIcon src="/poppy.png" />
          </HomeLink>
          <HomeLink to="/">
            <Title>Hannah's Hobby Room</Title>
          </HomeLink>
        </MediumContainerOne>
        <NavigationLink to="/about">
          {({ isActive }) => (
            <NavigationItem isActive={isActive}>
              <StyledIcon path={mdiHelpCircleOutline} size={1} />
            </NavigationItem>
          )}
        </NavigationLink>
      </MediumContainerOne>
      <MediumContainerTwo>
        <Navigation showText />
      </MediumContainerTwo>
    </MediumContainer>
  );

  const largePartial = (
    <>
      <HomeLink to="">
        <PoppyIcon src="/poppy.png" />
      </HomeLink>
      <HomeLink to="/">
        <Title>Hannah's Hobby Room</Title>
      </HomeLink>
      <Navigation showText />
      <NavigationLink to="/about">
        {({ isActive }) => (
          <NavigationItem isActive={isActive}>
            <StyledIcon path={mdiHelpCircleOutline} size={1} />
          </NavigationItem>
        )}
      </NavigationLink>
    </>
  );

  return (
    <NavBarContainer>
      {sm ? smallPartial : md ? largePartial : defaultPartial}
    </NavBarContainer>
  );
};

export default NavBar;
