import { styled, useMediaQuery, useTheme } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Article } from "..";
import ArticleCard from "./ArticleCard";
import { ContainerContainer, SectionTitle } from "./StyledComponents";

const RelatedArticlesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

interface RelatedArticlesProps {
  category: string;
  subcategory: string;
  slug: string;
}

const RelatedArticles: React.FunctionComponent<RelatedArticlesProps> = ({
  category,
  subcategory,
  slug,
}) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };

  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useMemo(() => {
    const getRelatedArticles = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles?subcategory=${subcategory}`,
        );
        setRelatedArticles(
          response.data.articles.filter((d: Article) => d.slug !== slug),
        );
      } catch (e) {
        console.log("couldnt load related articles:", e);
      }
    };

    getRelatedArticles();
  }, [slug, category, subcategory]);

  if (relatedArticles.length === 0) {
    return <></>;
  }

  return (
    <ContainerContainer>
      <RelatedArticlesContainer>
        <SectionTitle>Related Articles:</SectionTitle>
        {relatedArticles.map((article) => (
          <ArticleCard article={article} orientation="landscape" />
        ))}
      </RelatedArticlesContainer>
    </ContainerContainer>
  );
};

export default RelatedArticles;
