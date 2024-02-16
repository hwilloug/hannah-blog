import { ReactElement, Suspense, useState } from "react";
import { Pagination, useTheme } from "@mui/material";
import { Await, useLoaderData } from "react-router-dom";
import { Article, mapRespToArticle } from "..";
import { AxiosResponse } from "axios";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

const Browse: React.FunctionComponent = (): ReactElement => {
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
                variant="outlined"
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
