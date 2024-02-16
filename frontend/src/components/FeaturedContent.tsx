import styled from "@emotion/styled";
import {
  BodyContainer,
  BreakPointProps,
  ColorProps,
  CssProps,
  SectionHeader,
  SectionTitle,
  UnstyledLink,
} from "./StyledComponents";
import { Grow, useMediaQuery, useTheme } from "@mui/material";
import { Await, useLoaderData } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";
import { Article, mapRespToArticle } from "..";
import ArticleCard from "./ArticleCard";

const FeaturedContentContainer = styled.div<CssProps>`
  margin: 20px 0;
  max-width: ${(props) => (props.break ? "90vw" : "100%")};

  background-color: ${({ colors }) => colors.primary.main};
  border-radius: 5px;
`;

const FeaturedArticleContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const FeaturedContent: React.FunctionComponent = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };

  const featured = [
    "hannahs-hobby-room-refactor",
    "home-is-where-the-cake-is",
    "thoughts-on-anne-of-green-gables",
  ];

  return (
    <FeaturedContentContainer colors={theme.palette} break={sm}>
      <SectionTitle break={sm} colors={theme.palette}>
        Featured Articles:
      </SectionTitle>
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
              <FeaturedArticleContainer break={sm} colors={theme.palette}>
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
