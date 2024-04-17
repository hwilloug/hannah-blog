import { Container, Grid, styled } from "@mui/material";
import { animated, useInView } from "@react-spring/web";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Article, ArticlesApiResponse, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { StyledButton, UnstyledLink } from "./StyledComponents";

const CategoryPreviewContainer = styled(Container)(({ theme }) => ({
  marginTop: "20px",
}));

const CategoryPreviewArticleGrid = styled(Grid)(({ theme }) => ({}));

const MoreButton = styled(StyledButton)(({ theme }) => ({
  width: "97%",
  textAlign: "center",
  marginTop: "20px",
  backgroundColor: theme.palette.primary.main,
}));

const CategoryHeader = styled("h2")(({ theme }) => ({
  fontSize: "2.75rem",
  margin: "20px",
  color: "white",
  textAlign: "center",
  fontFamily: "Gluten, Ubuntu",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
}));

const Parallax = styled(animated.div)({});

interface CategoryPreviewProps {
  category: string;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ category }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const getCategoryArticles = async (category: string) => {
    const res: AxiosResponse<ArticlesApiResponse> = await axios.get(
      `${process.env.REACT_APP_API_URL}/articles?category=${category}&limit=3`,
    );
    return mapRespToArticles(res.data);
  };

  useEffect(() => {
    const setAllArticles = async () => {
      setArticles(await getCategoryArticles(category));
    };

    setAllArticles();
  }, []);

  const [ref, springs] = useInView(() => ({
    from: {
      transform: "translateY(25%)",
    },
    to: {
      transform: "translateY(0)",
    },
    config: {
      precision: 0.0001,
    },
  }));

  return (
    <CategoryPreviewContainer>
      <CategoryHeader>{category}</CategoryHeader>
      <CategoryPreviewArticleGrid container spacing={2} justifyContent="center">
        {articles.map((article) => (
          <Grid item xs={4}>
            <ArticleCard
              key={article.slug}
              article={article}
              orientation="portrait"
            />
          </Grid>
        ))}
      </CategoryPreviewArticleGrid>
      <UnstyledLink to={`/${category.toLowerCase()}`}>
        <MoreButton>See more {category} articles</MoreButton>
      </UnstyledLink>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
