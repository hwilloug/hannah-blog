import styled from "@emotion/styled";
import { ReactElement } from "react";
import { BodyContainer, SectionTitle } from "../components/StyledComponents";
import Browse from "../components/Browse";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryBrowse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const params = useParams();
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : undefined;

  return (
    <BodyContainer>
      <LatestArticlesContainer>
        <SectionTitle break={sm} colors={theme.palette}>
          {category} Articles:
        </SectionTitle>
        <Browse />
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default CategoryBrowse;
