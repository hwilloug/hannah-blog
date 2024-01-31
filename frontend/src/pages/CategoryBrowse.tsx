import styled from "@emotion/styled";
import { ReactElement } from "react";
import { BodyContainer, SectionTitle } from "../components/StyledComponents";
import Browse from "../components/Browse";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const CategoryBrowse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const params = useParams();
  const category = params.category;

  return (
    <BodyContainer>
      <LatestArticlesContainer>
        <SectionTitle break={sm}>{category} Articles:</SectionTitle>
        <Browse category={category} />
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default CategoryBrowse;
