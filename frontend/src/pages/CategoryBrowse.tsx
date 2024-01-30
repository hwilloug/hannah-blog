import styled from "@emotion/styled";
import { ReactElement } from "react";
import { BodyContainer } from "../components/StyledComponents";
import Browse from "../components/Browse";


const SectionTitle = styled.span`
  background-color: grey;
  font-size: 24px;
  width: 35rem;
  text-align: center;
  margin-top: 20px;
`;

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

interface CategoryBrowseProps {
  category: string
}

const CategoryBrowse: React.FunctionComponent<CategoryBrowseProps> = ({category}): ReactElement => {

  return (
    <BodyContainer>
      <LatestArticlesContainer>
        <SectionTitle>{category} Articles:</SectionTitle>
        <Browse category={category} />
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default CategoryBrowse;
