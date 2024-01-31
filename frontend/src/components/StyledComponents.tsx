import styled from "@emotion/styled";
import Icon from "@mdi/react";
import { Palette } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export interface BreakPointProps {
  break: boolean;
}

export interface ColorProps {
  colors: Palette;
}

export type CssProps = BreakPointProps & ColorProps;

export type NavProps = ColorProps & {
  isActive: boolean;
};

export const BodyContainer = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

export const SectionTitle = styled.span<CssProps>`
  background-color: ${({ colors }) => colors.primary.dark};
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  padding: 5px 0;
  border-radius: 5px;
  width: ${(props) => (props.break ? "100%" : "40rem")};
`;

export const StyledButton = styled.button<ColorProps>`
  all: unset;
  background-color: ${({ colors }) => colors.primary.dark};
  color: white;
  border-radius: 10px;
  border: 1px solid ${({ colors }) => colors.primary.dark}
  border-style: none;
  text-transform: uppercase;
  padding: 5px 10px;
`;

export const ArticleContentContainer = styled.div``;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const FullSizeImage = styled.img`
  width: 100%;
`;

export const SectionHeader = styled.h2`
  margin-bottom: 20px;
`;

export const RecipeContainer = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 20px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

export const StyledListItem = styled.li`
  margin: 20px 0;
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const BorderedFullSizeImage = styled(FullSizeImage)`
  border: 5px solid black;
`;

export const StyledIcon = styled(Icon)<ColorProps>``;

export const NavigationItem = styled.button<NavProps>`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: ${({ colors, isActive }) =>
    isActive ? colors.secondary.main : colors.primary.dark};

  padding: 10px;

  border-radius: 5px;
  border: 1px solid white;
`;
