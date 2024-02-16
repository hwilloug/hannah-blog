import { styled, useMediaQuery } from "@mui/material";
import { AxiosResponse } from "axios";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Article, mapRespToArticle } from "..";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { SectionTitle } from "./StyledComponents";

const FeaturedContentContainer = styled("div")(({ theme }) => ({
  margin: "20px 0",
  maxWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90vw" : "100%",

  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
}));

const FeaturedArticleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  padding: "10px",
}));

const FeaturedContent: React.FunctionComponent = () => {
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };

  const featured = [
    "hannahs-hobby-room-refactor",
    "home-is-where-the-cake-is",
    "thoughts-on-anne-of-green-gables",
  ];

  return (
    <FeaturedContentContainer>
      <SectionTitle>Featured Articles:</SectionTitle>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={data.articles}
          errorElement={<p>Error loading articles!</p>}
        >
          {(resp) => {
            if (resp === undefined) {
              return <p>404 not found??</p>;
            }

            const featuredArticles: Article[] = resp.data
              .map((a: any) => mapRespToArticle(a))
              .filter((article: Article) => featured.includes(article.slug));
            return (
              <FeaturedArticleContainer>
                {featuredArticles.map((article) => (
                  <ArticleCard article={article} orientation="portrait" />
                ))}
              </FeaturedArticleContainer>
            );
          }}
        </Await>
      </Suspense>
    </FeaturedContentContainer>
  );
};

export default FeaturedContent;
