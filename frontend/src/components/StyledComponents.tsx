import Icon from "@mdi/react";
import {
  Icon as MuiIcon,
  LinearProgress,
  linearProgressClasses,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";

export type NavProps = {
  isActive: boolean;
  isFilled?: boolean;
};

export const StyledP = styled("p")({
  lineHeight: 1.75,
});

export const BrowseContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px 5px",
  padding: "10px",

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
}));

export const BodyContainer = styled("div")(({ theme }) => ({
  margin: useMediaQuery(theme.breakpoints.down("xs")) ? 0 : "0 50px",
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  alignItems: "center",
}));

export const ContainerContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  padding: "10px",
}));

export const SectionTitle = styled("h2")(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
  fontWeight: "normal",
  textAlign: "center",
  margin: "10px",
  padding: "5px 0",
  borderRadius: "5px",
  fontFamily: "Gluten, Montserrat, Arial, Helvetica, sans-serif",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  all: "unset",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.primary.dark,
  color: theme.palette.mode === "dark" ? "black" : "white",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderStyle: "none",
  textTransform: "uppercase",
  padding: "5px 10px",
  ":hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.main,
  },
}));

export const ArticleContentContainer = styled("div")(({ theme }) => ({
  lineHeight: 1.75,
  padding: "20px",
  color: theme.palette.mode === "dark" ? "white" : "black",
  a: {
    color: theme.palette.secondary.main,
  },
}));

export const Section = styled("div")({
  marginBottom: "50px",
  lineHeight: 1.75,
  p: {
    marginBottom: "50px",
  },
});

export const FullSizeImage = styled("img")({
  width: "100%",
  borderRadius: "5px",
});

export const SectionHeader = styled("h2")({
  marginBottom: "20px",
});

export const SubsectionHeader = styled("h3")({});

export const RecipeContainer = styled("div")({
  backgroundColor: "rgb(244, 244, 244)",
  padding: "20px",
  borderRadius: "5px",
  border: "1px solid lightgrey",
});

export const StyledListItem = styled("li")({
  margin: "20px 0",
});

export const UnstyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export const NavigationLink = styled(NavLink)({
  textDecoration: "none",
  color: "black",
});

export const BorderedFullSizeImage = styled(FullSizeImage)(({ theme }) => ({
  border: `5px solid ${theme.palette.secondary.main}`,
}));

export const StyledIcon = styled(Icon)({});

export const SocialIcon = styled(MuiIcon)(({ theme }) => ({
  ":hover": {
    color: theme.palette.secondary.main,
  },
}));

export const NavigationItem = styled("button")<NavProps>(
  ({ theme, isActive, isFilled }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    backgroundColor:
      isActive && isFilled
        ? theme.palette.secondary.main
        : isFilled
          ? theme.palette.primary.dark
          : isActive
            ? theme.palette.secondary.main
            : "inherit",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "5px",
    border: isFilled ? "1px solid white" : "none",
    ":hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
  }),
);

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const Code = styled("code")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.light : "lightgrey",
  padding: "5px",
}));

export const CategoryB = styled("b")(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.secondary.main,
  textDecoration: `underline ${theme.palette.secondary.main} wavy`,
  padding: "10px 0",
  textDecorationThickness: "1.15px",
}));
