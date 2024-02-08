import styled from "@emotion/styled";
import { ReactElement, Suspense, useState } from "react";
import { BreakPointProps, CssProps, UnstyledLink } from "./StyledComponents";
import { Pagination, useMediaQuery, useTheme } from "@mui/material";
import Categories from "./Categories";
import { Await, Link, useLoaderData } from "react-router-dom";
import { Article, mapRespToArticle } from "..";
import { AxiosResponse } from "axios";
import Loading from "./Loading";

const ArticleContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: 20px;

  border: 1px solid ${(props) => props.colors.primary.dark};
  border-radius: 25px 5px;

  width: ${(props) => (props.break ? "90vw" : "35rem")};
  padding: 10px;
  margin: 20px 0;

  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};

  :hover {
    border: 5px solid ${({ colors }) => colors.secondary.main};
    margin: 16px;
  }
`;

const ArticleDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
`;

const ArticleSubtitle = styled.h3`
  font-size: 18px;
  margin: 3px 0;
  font-weight: lighter;
  color: grey;
`;

const ArticleImage = styled.img<BreakPointProps>`
  width: ${(props) => (props.break ? "100%" : "13rem")};
  object-fit: cover;
  border-radius: 5px;
`;

const Browse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };
  const [page, setPage] = useState<number>(1);
  const PAGE_SIZE = 5;

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={data.articles}
        errorElement={<p>Error loading articles!</p>}
      >
        {(resp) => {
          if (resp === undefined) {
            return <p>404 not found??</p>;
          }

          const articles: Article[] = resp.data.map((a: any) =>
            mapRespToArticle(a),
          );

          const numPages = Math.ceil(articles.length / PAGE_SIZE);

          return articles.length ? (
            <>
              <Pagination
                count={numPages}
                page={page}
                onChange={handlePageChange}
                color="secondary"
              />
              {articles
                .sort(
                  (a: Article, b: Article) =>
                    (new Date(b.updatedAt) as any) -
                    (new Date(a.updatedAt) as any),
                )
                .filter((a) => {
                  return (
                    articles.indexOf(a) <= page * PAGE_SIZE - 1 &&
                    articles.indexOf(a) >= (page - 1) * PAGE_SIZE
                  );
                })
                .map((article: Article) => (
                  <UnstyledLink
                    to={`/articles/${article.slug}`}
                    key={article.slug}
                  >
                    <ArticleContainer break={sm} colors={theme.palette}>
                      <ArticleImage
                        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
                        break={sm}
                        alt={article.imgAlt}
                      />
                      <ArticleDetailContainer>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
                        <ArticleSubtitle>
                          <i>{new Date(article.updatedAt).toDateString()}</i>
                        </ArticleSubtitle>
                        <Categories
                          category={article.category}
                          subcategories={article.subcategory}
                        />
                      </ArticleDetailContainer>
                    </ArticleContainer>
                  </UnstyledLink>
                ))}
              <Pagination
                count={numPages}
                page={page}
                onChange={handlePageChange}
                color="secondary"
              />
            </>
          ) : (
            <p>No articles Found</p>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Browse;
