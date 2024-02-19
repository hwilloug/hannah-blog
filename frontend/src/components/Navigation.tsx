import {
  mdiBookOpenVariant,
  mdiChefHat,
  mdiCodeBlockTags,
  mdiContentCut,
  mdiFlower,
  mdiLamp,
} from "@mdi/js";
import { styled, useTheme } from "@mui/material";
import { ReactElement } from "react";
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
  const theme = useTheme();

  const navItems = [
    {
      name: "Food",
      path: "/food",
      icon: mdiChefHat,
    },
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

  const navItemSize = 1;

  return (
    <NavigationContainer>
      {navItems.map((navItem) => (
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
