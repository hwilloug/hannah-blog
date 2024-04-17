import { Box, styled } from "@mui/material";
import axios from "axios";
import { useMemo, useState } from "react";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import Carousel from "./Carousel";
import Loading from "./Loading";
import { SectionTitle } from "./StyledComponents";
import WindowFrame from "./WindowFrame";

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

  useMemo(() => {
    const getFeaturedArticles = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles?featured=true`,
        );
        return mapRespToArticles(resp.data);
      } catch (e) {
        console.log("error getting featured articles", e);
      }
    };
    Promise.resolve(getFeaturedArticles()).then((articles) => {
      if (articles !== undefined) {
        setFeaturedArticles(articles);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <FeaturedContentContainer>
      <SectionTitle>Featured Articles</SectionTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <Carousel>
          {featuredArticles.map(
            (article) =>
              article && (
                <WindowFrame style={{ width: "15rem" }}>
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    orientation="portrait-large"
                  />
                </WindowFrame>
              ),
          )}
        </Carousel>
      )}
    </FeaturedContentContainer>
  );
};

export default FeaturedContent;
