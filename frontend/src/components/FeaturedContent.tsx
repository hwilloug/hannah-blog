import { styled, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { SectionTitle } from "./StyledComponents";

const FeaturedContentContainer = styled("div")(({ theme }) => ({
  margin: "20px 0",
  padding: "10px",
  maxWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90vw" : "45rem",
  minWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90vw" : "1rem",

  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
}));

const FeaturedItemCarousel = styled(Carousel)(({ theme }) => ({
  width: "100%",
}));

const FeaturedContent: React.FunctionComponent = () => {
  const theme = useTheme();
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

  const responsive = {
    all: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <FeaturedContentContainer>
      <SectionTitle>Featured Articles</SectionTitle>
      <FeaturedItemCarousel responsive={responsive} rewind autoPlay>
        {featuredArticles.map(
          (article) =>
            article && (
              <ArticleCard
                key={article.slug}
                article={article}
                orientation="portrait-large"
              />
            ),
        )}
      </FeaturedItemCarousel>
    </FeaturedContentContainer>
  );
};

export default FeaturedContent;
