import styled from "@emotion/styled";
import { ReactElement } from "react";
import { BodyContainer, SectionTitle } from "../components/StyledComponents";
import Browse from "../components/Browse";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryBrowse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : null;
  const subcategoryRaw = searchParams.get("subcategory");
  const subcategory =
    subcategoryRaw &&
    subcategoryRaw.split("")[0].toUpperCase() +
      subcategoryRaw.split("").splice(1).join("");

  return (
    <BodyContainer>
      <LatestArticlesContainer>
        <SectionTitle break={sm} colors={theme.palette}>
          {category || subcategory} Articles:
        </SectionTitle>
        <Browse />
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default CategoryBrowse;
