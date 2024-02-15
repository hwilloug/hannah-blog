import { styled } from "@mui/material";

const RelatedArticlesContainer = styled("div")({
  display: "flex",
});

interface RelatedArticlesProps {
  category: string;
  subcategory: string;
}

const RelatedArticles: React.FunctionComponent<RelatedArticlesProps> = ({
  category,
  subcategory,
}) => {
  return <RelatedArticlesContainer></RelatedArticlesContainer>;
};

export default RelatedArticles;
