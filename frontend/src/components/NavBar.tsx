import { useAuth0 } from "@auth0/auth0-react";
import {
  mdiHelpCircleOutline,
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
  alignItems: "center",
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

const Username = styled("span")({
  marginTop: "15px",
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
            <Navigation showText filled />
            <NavigationLink to="/about">
              {({ isActive }) => (
                <NavigationItem isActive={isActive} isFilled>
                  <StyledIcon path={mdiHelpCircleOutline} size={1} />
                </NavigationItem>
              )}
            </NavigationLink>
            {!isAuthenticated && (
              <NavigationItem
                isFilled
                isActive={false}
                onClick={() => loginWithRedirect()}
              >
                <StyledIcon path={mdiLoginVariant} size={1} />
              </NavigationItem>
            )}
            {isAuthenticated && (
              <>
                <Username>{username}</Username>
                <NavigationItem
                  isFilled
                  isActive={false}
                  onClick={() => logout()}
                >
                  <StyledIcon path={mdiLogoutVariant} size={1} />
                </NavigationItem>
              </>
            )}
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
              <Username>{username}</Username>
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
          <Username>{username}</Username>
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
