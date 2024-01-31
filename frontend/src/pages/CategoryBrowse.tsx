import styled from "@emotion/styled";
import { ReactElement } from "react";
import { BodyContainer, SectionTitle } from "../components/StyledComponents";
import Browse from "../components/Browse";
import { useMediaQuery, useTheme } from "@mui/material";

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

interface CategoryBrowseProps {
  category: string;
}

const CategoryBrowse: React.FunctionComponent<CategoryBrowseProps> = ({
  category,
}): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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
