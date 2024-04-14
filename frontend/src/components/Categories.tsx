import { styled } from "@mui/material";
import { ReactElement } from "react";
import { UnstyledLink } from "./StyledComponents";

const CategoryContainer = styled("div")({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  textTransform: "capitalize",
  flexWrap: "wrap",
});

const Category = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "black" : "white",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.primary.dark,
  borderRadius: "15px",
  padding: "5px 10px",
  ":hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.light
        : theme.palette.primary.main,
  },
}));

const Subcategory = styled(Category)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "black",
  backgroundColor: theme.palette.primary.light,
  ":hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

interface CategoriesProps {
  category: string;
  subcategories: string[];
}

const Categories: React.FunctionComponent<CategoriesProps> = ({
  category,
  subcategories,
}): ReactElement => {
  return (
    <CategoryContainer>
      <UnstyledLink to={`/${category.toLowerCase()}`}>
        <Category>{category}</Category>
      </UnstyledLink>
      {subcategories.map((subcategory) => (
        <UnstyledLink to={`/articles?subcategory=${subcategory}`}>
          <Subcategory key={subcategory}>{subcategory}</Subcategory>
        </UnstyledLink>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
