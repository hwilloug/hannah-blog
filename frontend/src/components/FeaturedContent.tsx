import { styled, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useMemo, useState } from "react";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { SectionTitle } from "./StyledComponents";

const FeaturedContentContainer = styled("div")(({ theme }) => ({
  margin: "20px 0",
  padding: "10px",
  maxWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90vw" : "55rem",

  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
}));

const FeaturedArticleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
}));

const FeaturedContent: React.FunctionComponent = () => {
  const [featuredArticles, setFeaturedArticles] = useState<
    (Article | undefined)[]
  >([]);

  const featured = [
    "house-tour-2024",
    "you-can-now-like-each-article",
    "a-spring-sampler",
  ];

  useMemo(() => {
    const getFeaturedArticle = async (slug: string) => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles?slug=${slug}`,
        );
        return mapRespToArticles(resp.data)[0];
      } catch (e) {
        console.log("error getting featured articles", e);
      }
    };
    Promise.all(featured.map((f) => getFeaturedArticle(f))).then((articles) => {
      setFeaturedArticles(articles);
    });
  }, []);

  return (
    <FeaturedContentContainer>
      <SectionTitle>Featured Articles:</SectionTitle>
      <FeaturedArticleContainer>
        {featuredArticles.map(
          (article) =>
            article && (
              <ArticleCard
                key={article.slug}
                article={article}
                orientation="portrait"
              />
            ),
        )}
      </FeaturedArticleContainer>
    </FeaturedContentContainer>
  );
};

export default FeaturedContent;
