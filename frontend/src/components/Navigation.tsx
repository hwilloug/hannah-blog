import styled from "@emotion/styled";
import { ReactElement } from "react";
import Icon from "@mdi/react";
import { mdiChefHat } from "@mdi/js";
import { Link } from "react-router-dom";
import { mdiFlower } from "@mdi/js";
import { mdiContentCut } from "@mdi/js";
import { mdiCodeBlockTags } from "@mdi/js";
import { mdiBookOpenVariant } from "@mdi/js";
import { mdiSyllabaryHiragana } from "@mdi/js";

const NavigationContainer = styled.div`
  flex-grow: 4;

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NavigationItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavigationItemText = styled.span`
  text-transform: uppercase;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

interface NavigationProps {
  showText?: boolean;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  showText,
}): ReactElement => {
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
        <NavLink to={navItem.path} key={navItem.name}>
          <NavigationItem>
            <Icon path={navItem.icon} size={navItemSize} />
            {showText && (
              <NavigationItemText>{navItem.name}</NavigationItemText>
            )}
          </NavigationItem>
        </NavLink>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
