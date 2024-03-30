import { styled } from "@mui/material";
import { ReactElement } from "react";
import { NAV_ITEMS } from "./NavBar";
import { NavigationItem, NavigationLink, StyledIcon } from "./StyledComponents";

const NavigationContainer = styled("div")({
  flexGrow: 4,

  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap",
});

const NavigationItemText = styled("span")({
  textTransform: "uppercase",
});

interface NavigationProps {
  showText?: boolean;
  filled?: boolean;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  showText,
  filled,
}): ReactElement => {
  const navItemSize = 1;

  return (
    <NavigationContainer>
      {NAV_ITEMS.map((navItem) => (
        <NavigationLink to={navItem.path} key={navItem.name}>
          {({ isActive }) => (
            <NavigationItem isActive={isActive} isFilled={filled}>
              <StyledIcon path={navItem.icon} size={navItemSize} />
              {showText && (
                <NavigationItemText>{navItem.name}</NavigationItemText>
              )}
            </NavigationItem>
          )}
        </NavigationLink>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
