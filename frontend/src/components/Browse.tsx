import { Pagination, PaginationItem, styled } from "@mui/material";
import { AxiosResponse } from "axios";
import { ReactElement, Suspense, useState } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import { Article, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const StyledPagination = styled(Pagination)({
  alignSelf: "center",
  padding: "10px",
  borderRadius: "5px",
});

interface BrowseProps {
  hidePagination?: boolean;
  pageSize: number;
}

const Browse: React.FunctionComponent<BrowseProps> = ({
  hidePagination,
  pageSize,
}): ReactElement => {
  const data = useLoaderData() as {
    articles: Promise<AxiosResponse<any, any>>;
  };
  const [page, setPage] = useState<number>(1);
  const PAGE_SIZE = pageSize;

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

          const paginationPartial = (
            <StyledPagination
              count={numPages}
              page={page}
              onChange={handlePageChange}
              color="secondary"
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`${window.location.origin + window.location.pathname}?page=${item.page}`}
                  {...item}
                />
              )}
            />
          );

          return articles.length ? (
            <>
              {!hidePagination && paginationPartial}
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
              {!hidePagination && paginationPartial}
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
