import styled from "@emotion/styled";
import { ReactElement } from "react";
import Icon from "@mdi/react";
import { mdiChefHat } from "@mdi/js";
import { Link, NavLink } from "react-router-dom";
import { mdiFlower } from "@mdi/js";
import { mdiContentCut } from "@mdi/js";
import { mdiCodeBlockTags } from "@mdi/js";
import { mdiBookOpenVariant } from "@mdi/js";
import { mdiSyllabaryHiragana } from "@mdi/js";
import { NavigationItem, NavigationLink, StyledIcon } from "./StyledComponents";
import { useTheme } from "@mui/material";

const NavigationContainer = styled.div`
  flex-grow: 4;

  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavigationItemText = styled.span`
  text-transform: uppercase;
`;

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
      name: "Languages",
      path: "/languages",
      icon: mdiSyllabaryHiragana,
    },
  ];

  const navItemSize = 1;

  return (
    <NavigationContainer>
      {navItems.map((navItem) => (
        <NavigationLink to={navItem.path} key={navItem.name}>
          {({ isActive }) => (
            <NavigationItem
              colors={theme.palette}
              isActive={isActive}
              isFilled={filled}
            >
              <StyledIcon
                path={navItem.icon}
                size={navItemSize}
                colors={theme.palette}
              />
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
