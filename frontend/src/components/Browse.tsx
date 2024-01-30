import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import { BreakPointProps } from "./StyledComponents";
import { useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import Categories from "./Categories";
import { Link } from "react-router-dom";



const ArticleContainer = styled.div<BreakPointProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: 20px;

  border: 1px solid black;
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

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ArticleImage = styled.img<BreakPointProps>`
  width: ${(props) => (props.break ? "100%" : "10rem")};
`;


export interface ArticlesApiResponse {
  Slug: string;
  Title: string;
  Subtitle: string;
  Img: string;
  Category: string;
  Subcategory: string[];
  CreatedAt: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  category: string;
  subcategory: string[];
  createdAt: string;
}

interface BrowseProps {
  category?: string;
}

const Browse: React.FunctionComponent<BrowseProps> = ({category}): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const [articles, setArticles] = useState<Article[]>([]);

  useMemo(() => {
    const getArticles = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles${category ? '?category=' + category : ''}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        setArticles(
          resp.data.map((d: ArticlesApiResponse) => ({
            slug: d.Slug,
            title: d.Title,
            subtitle: d.Subtitle,
            img: d.Img,
            category: d.Category,
            subcategory: d.Subcategory,
            createdAt: d.CreatedAt,
          })),
        );
      } catch (e) {
        console.error("Error getting articles", e);
      }
    };

    getArticles();
  }, [category]);


  return (
    <>
    {articles
        .sort(
          (a: Article, b: Article) =>
            (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any),
        )
        .map((article) => (
          <ArticleLink to={`articles/${article.slug}`} key={article.slug}>
            <ArticleContainer break={sm}>
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
          </ArticleLink>
        ))}
    </>
  );
};

export default Browse;
