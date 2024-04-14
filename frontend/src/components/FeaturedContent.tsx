import { Box, styled } from "@mui/material";
import axios from "axios";
import { useMemo, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { SectionTitle } from "./StyledComponents";

const FeaturedContentContainer = styled(Box)(({ theme }) => ({
  padding: "10px",

  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
}));

const FeaturedContent: React.FunctionComponent = () => {
  const [featuredArticles, setFeaturedArticles] = useState<
    (Article | undefined)[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const featured = ["house-tour-2024"];

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
      setIsLoading(false);
    });
  }, []);

  return (
    <FeaturedContentContainer>
      <SectionTitle>Featured Article</SectionTitle>
      <Box>
        {isLoading ? (
          <Loading />
        ) : (
          featuredArticles.map(
            (article) =>
              article && (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  orientation="portrait-large"
                />
              ),
          )
        )}
      </Box>
    </FeaturedContentContainer>
  );
};

export default FeaturedContent;
