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
import { useMediaQuery, useTheme } from "@mui/material";
import { Await, useLoaderData } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Suspense, useEffect } from "react";
import Loading from "./Loading";
import { Article, mapRespToArticle } from "..";

const FeaturedContentContainer = styled.div<CssProps>`
  padding: 20px;
  margin: 20px 0;
`;

const FeaturedArticleContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  gap: 20px;
  padding: 10px;
`;

const FeaturedArticle = styled(UnstyledLink)<CssProps>`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: ${(props) => (props.break ? "100%" : "13rem")};
  padding: 10px;

  border: 1px solid black;
  border-radius: 5px;
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
`;

const FeaturedArticleTitle = styled.h2<ColorProps>`
  font-size: 1.25rem;

  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
`;

const FeaturedArticleSubtitle = styled.h3`
  font-size: 18px;
  margin: 3px 0;
  font-weight: lighter;
  color: grey;
`;

const FeaturedArticleImage = styled.img<BreakPointProps>`
  width: ${(props) => (props.break ? "100%" : "13rem")};
  object-fit: cover;
  border-radius: 5px;
  object-fit: cover;
  height: 13rem;
`;

const FeaturedContent: React.FunctionComponent = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };

  const featured = [
    "2024-spring-summer-garden-plan",
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
                  <FeaturedArticle
                    to={`/articles/${article.slug}`}
                    break={sm}
                    colors={theme.palette}
                  >
                    <FeaturedArticleImage
                      src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
                      break={sm}
                    />
                    <FeaturedArticleTitle colors={theme.palette}>
                      {article.title}
                    </FeaturedArticleTitle>
                    <FeaturedArticleSubtitle>
                      {article.subtitle}
                    </FeaturedArticleSubtitle>
                  </FeaturedArticle>
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