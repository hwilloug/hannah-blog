import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { BodyContainer, BreakPointProps } from "../components/StyledComponents";
import axios from "axios";
import { useMediaQuery, useTheme } from "@mui/material";

const WelcomeBanner = styled.div<BreakPointProps>`
  border: 1px solid black;
  padding: 20px;
  max-width: ${(props) => props.break ? "90vw": "100%"};

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: white;
`;

const Title = styled.span`
  font-size: 60px;
`;

const SectionTitle = styled.span`
  background-color: grey;
  font-size: 24px;
  width: 35rem;
  text-align: center;
  margin-top: 20px;
`;

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ArticleContainer = styled.div<BreakPointProps>`
  display: flex;
  flex-direction: ${(props) => props.break ? "column": "row"};
  gap: 20px;

  border: 1px solid black;
  width: ${(props) => props.break ? "90vw": "35rem"};
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
  width: ${(props) => props.break ? "100%": "10rem"};
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

const HomePage: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))

  const [articles, setArticles] = useState<Article[]>([]);

  useMemo(() => {
    const getArticles = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles`,
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
  }, []);

  return (
    <BodyContainer>
      <WelcomeBanner break={sm}>
        <Title>Welcome to Poppyland Blog</Title>
        <Navigation showText={true} />
        <p>
          We're currently undergoing an overhaul! Thank you for your patience :)
        </p>
      </WelcomeBanner>
      <LatestArticlesContainer>
        <SectionTitle>Latest Articles:</SectionTitle>
        {articles
          .sort(
            (a: Article, b: Article) =>
              (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any),
          )
          .map((article) => (
            <ArticleLink to={`articles/${article.slug}`} key={article.slug}>
              <ArticleContainer break={sm}>
                <ArticleImage
                  src={`https://blog-images.poppyland.dev/${article.img}`}
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
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default HomePage;
