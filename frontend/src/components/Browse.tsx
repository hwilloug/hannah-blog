import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import { BreakPointProps, CssProps, UnstyledLink } from "./StyledComponents";
import { Pagination, useMediaQuery, useTheme } from "@mui/material";
import Categories from "./Categories";
import { Link, useLoaderData } from "react-router-dom";
import { Article } from "..";

const ArticleContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: 20px;

  border: 1px solid ${(props) => props.colors.primary.dark};
  border-radius: 25px 5px;
  width: ${(props) => (props.break ? "90vw" : "35rem")};
  padding: 10px;
  background-color: white;
`;

const ArticleDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ArticleTitle = styled.span`
  font-size: 24px;
`;

const ArticleSubtitle = styled.span`
  font-size: 18px;
`;

const ArticleImage = styled.img<BreakPointProps>`
  width: ${(props) => (props.break ? "100%" : "10rem")};
`;

interface BrowseProps {
  category?: string;
}

const Browse: React.FunctionComponent<BrowseProps> = ({
  category,
}): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const articles: Article[] = useLoaderData() as Article[];

  const [page, setPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);
  const PAGE_SIZE = 5;

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  useMemo(() => {
    setNumPages(Math.ceil(articles.length / PAGE_SIZE));
  }, [articles]);

  const noArticlesPartial = <p>No articles found :(</p>;

  const articlesPartial = (
    <>
      {articles
        .sort(
          (a: Article, b: Article) =>
            (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any),
        )
        .filter((a) => {
          return (
            articles.indexOf(a) <= page * PAGE_SIZE - 1 &&
            articles.indexOf(a) >= (page - 1) * PAGE_SIZE
          );
        })
        .map((article) => (
          <UnstyledLink to={`/articles/${article.slug}`} key={article.slug}>
            <ArticleContainer break={sm} colors={theme.palette}>
              <ArticleImage
                src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
                break={sm}
              />
              <ArticleDetailContainer>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
                <ArticleSubtitle>{article.createdAt}</ArticleSubtitle>
                <Categories
                  category={article.category}
                  subcategories={article.subcategory}
                />
              </ArticleDetailContainer>
            </ArticleContainer>
          </UnstyledLink>
        ))}
      <Pagination count={numPages} page={page} onChange={handlePageChange} />
    </>
  );
  return articles.length ? articlesPartial : noArticlesPartial;
};

export default Browse;
