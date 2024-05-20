import { useAuth0 } from "@auth0/auth0-react";
import {
  mdiBookOpenVariant,
  mdiCodeBlockTags,
  mdiContentCut,
  mdiFlower,
  mdiHelpCircleOutline,
  mdiLamp,
  mdiLoginVariant,
  mdiLogoutVariant,
} from "@mdi/js";
import { MoreVertOutlined } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { NavigationItem, NavigationLink, StyledIcon } from "./StyledComponents";

export const NAV_ITEMS = [
  {
    name: "Gardening",
    path: "/gardening",
    icon: mdiFlower,
  },
  {
    name: "Crafts",
    path: "/crafts",
    icon: mdiContentCut,
  },
  {
    name: "Coding",
    path: "/coding",
    icon: mdiCodeBlockTags,
  },
  {
    name: "Books",
    path: "/books",
    icon: mdiBookOpenVariant,
  },
  {
    name: "Antiquing",
    path: "/antiquing",
    icon: mdiLamp,
  },
];

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
});

const SmallContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: "100%",
});

const RightIconContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  margin: "0 20px",
  alignItems: "center",
});

const Title = styled("h1")({
  fontSize: "2rem",
  color: "white",
  margin: "0 20px",
  fontFamily: "Gluten, Montserrat, Arial, Helvetica, sans-serif",
  textShadow: "-1px 0 black, 0 1px black, 3px 3px black, 0 -1px black",
});

const PoppyIcon = styled("img")({
  height: "75px",
});

const HomeLink = styled(Link)({
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const UsernameBlack = styled("span")({
  color: "black",
  marginLeft: "10px",
});

const UsernameWhite = styled(UsernameBlack)({
  color: "white",
});

const NavBar: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } =
    useAuth0();

  const [username, setUsername] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getUsername = async () => {
      if (isAuthenticated && user) {
        const claims = await getIdTokenClaims();
        if (claims) {
          setUsername(claims["hannahshobbyroom.com/username"]);
        }
      }
    };
    getUsername();
  }, [isAuthenticated, user]);

  const smallPartial = (
    <SmallContainer>
      <HomeLink to="">
        <PoppyIcon src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy.png`} />
        <Title>Hannah's Hobby Room</Title>
      </HomeLink>
      <RightIconContainer>
        <Button variant="contained" disableElevation onClick={handleClick}>
          <MoreVertOutlined />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {NAV_ITEMS.map((item) => (
            <NavigationLink to={item.path}>
              <MenuItem key={item.name} onClick={handleClose} disableRipple>
                <StyledIcon path={item.icon} size={1} sx={{ mr: 1 }} />
                <span>{item.name}</span>
              </MenuItem>
            </NavigationLink>
          ))}
          <NavigationLink to="/about">
            <MenuItem onClick={handleClose} disableRipple>
              <StyledIcon path={mdiHelpCircleOutline} size={1} sx={{ mr: 1 }} />
              <span>About</span>
            </MenuItem>
          </NavigationLink>
          {!isAuthenticated && (
            <MenuItem onClick={handleClose} disableRipple>
              <NavigationItem
                isActive={false}
                isFilled
                onClick={() => loginWithRedirect()}
              >
                <StyledIcon path={mdiLoginVariant} size={1} />
              </NavigationItem>
            </MenuItem>
          )}
          {isAuthenticated && (
            <MenuItem onClick={handleClose} disableRipple>
              <UsernameBlack>{username}</UsernameBlack>
              <NavigationItem
                isFilled
                isActive={false}
                onClick={() => logout()}
              >
                <StyledIcon path={mdiLogoutVariant} size={1} />
              </NavigationItem>
            </MenuItem>
          )}
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
        <MediumContainerOne>
          <NavigationLink to="/about">
            {({ isActive }) => (
              <NavigationItem isActive={isActive}>
                <StyledIcon path={mdiHelpCircleOutline} size={1} />
              </NavigationItem>
            )}
          </NavigationLink>
          {!isAuthenticated && (
            <NavigationItem
              isActive={false}
              onClick={() => loginWithRedirect()}
            >
              <StyledIcon path={mdiLoginVariant} size={1} />
            </NavigationItem>
          )}
          {isAuthenticated && (
            <>
              <UsernameWhite>{username}</UsernameWhite>
              <NavigationItem isActive={false} onClick={() => logout()}>
                <StyledIcon path={mdiLogoutVariant} size={1} />
              </NavigationItem>
            </>
          )}
        </MediumContainerOne>
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
      {!isAuthenticated && (
        <NavigationItem isActive={false} onClick={() => loginWithRedirect()}>
          <StyledIcon path={mdiLoginVariant} size={1} />
        </NavigationItem>
      )}
      {isAuthenticated && (
        <>
          <UsernameWhite>{username}</UsernameWhite>
          <NavigationItem isActive={false} onClick={() => logout()}>
            <StyledIcon path={mdiLogoutVariant} size={1} />
          </NavigationItem>
        </>
      )}
    </>
  );

  return (
    <NavBarContainer>
      {sm ? smallPartial : lg ? largePartial : defaultPartial}
    </NavBarContainer>
  );
};

export default NavBar;
