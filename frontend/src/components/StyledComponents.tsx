import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export interface BreakPointProps {
  break: boolean;
}

export const BodyContainer = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

export const SectionTitle = styled.span<BreakPointProps>`
  background-color: grey;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  width: ${(props) => (props.break ? "100%" : "40rem")};
`;

export const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border-radius: 15px;
  text-transform: uppercase;
  padding: 5px 5px;
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
