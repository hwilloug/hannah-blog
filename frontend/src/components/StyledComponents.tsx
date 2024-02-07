import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material/styles";
import Icon from "@mdi/react";
import { LinearProgress, Palette, linearProgressClasses } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Icon as MuiIcon } from "@mui/material";

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
  align-items: center;
`;

export const SectionTitle = styled.h2<CssProps>`
  background-color: ${({ colors }) => colors.primary.dark};
  color: white;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin: 10px auto;
  padding: 5px 0;
  border-radius: 5px;
  width: ${(props) => (props.break ? "100%" : "40rem")};
  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

export const StyledButton = styled.button<ColorProps>`
  all: unset;
  background-color: ${({ colors }) => (colors.mode === "dark" ? colors.secondary.main : colors.primary.dark)};
  color: ${({ colors }) => (colors.mode === "dark" ? "black" : "white")};
  border-radius: 10px;
  border: 1px solid ${({ colors }) => colors.primary.dark}
  border-style: none;
  text-transform: uppercase;
  padding: 5px 10px;

  :hover {
    background-color: ${({ colors }) => (colors.mode === "dark" ? colors.secondary.dark : colors.secondary.main)};
  }
`;

export const ArticleContentContainer = styled.div<ColorProps>`
  line-height: 1.75;
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};

  a {
    color: ${({ colors }) => colors.secondary.main};
  }
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const FullSizeImage = styled.img`
  width: 100%;
  border-radius: 5px;
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

export const SocialIcon = styled(MuiIcon)<ColorProps>`
  :hover {
    color: ${({ colors }) => colors.secondary.main};
  }
`;

export const NavigationItem = styled.button<NavProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: ${({ colors, isActive }) =>
    isActive ? colors.secondary.main : colors.primary.dark};

  padding: 10px;
  margin-top: 20px;

  border-radius: 5px;
  border: 1px solid white;

  :hover {
    background-color: ${({ colors }) => colors.primary.main};
  }
`;

export const ProgressBar = muiStyled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "lightgrey",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));
