import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import { ColorProps } from "./StyledComponents";

const CategoryContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-transform: capitalize;
  flex-wrap: wrap;
`;

const Category = styled.div<ColorProps>`
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  background-color: ${({ colors }) => colors.primary.main};
  border-radius: 15px;
  padding: 5px 10px;
`;

const Subcategory = styled(Category)`
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  background-color: ${({ colors }) => colors.primary.light};
`;

interface CategoriesProps {
  category: string;
  subcategories: string[];
}

const Categories: React.FunctionComponent<CategoriesProps> = ({
  category,
  subcategories,
}): ReactElement => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <CategoryContainer>
      <Category colors={colors}>{category}</Category>
      {subcategories.map((subcategory) => (
        <Subcategory key={subcategory} colors={colors}>
          {subcategory}
        </Subcategory>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
