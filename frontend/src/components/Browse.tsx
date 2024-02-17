import { Pagination, styled, useTheme } from "@mui/material";
import { AxiosResponse } from "axios";
import { ReactElement, Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const StyledPagination = styled(Pagination)({
  alignSelf: "center",
  padding: "10px",
  borderRadius: "5px",
});

const Browse: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
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
          const articles: Article[] = mapRespToArticles(resp.data);

          const numPages = Math.ceil(articles.length / PAGE_SIZE);

          return articles.length ? (
            <>
              <StyledPagination
                count={numPages}
                page={page}
                onChange={handlePageChange}
                color="secondary"
                shape="rounded"
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
                  <ArticleCard article={article} orientation="landscape" />
                ))}
              <StyledPagination
                count={numPages}
                page={page}
                onChange={handlePageChange}
                color="secondary"
                shape="rounded"
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
