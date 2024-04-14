import { Container, Grid, styled } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Article, ArticlesApiResponse, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { StyledButton, UnstyledLink } from "./StyledComponents";

const CategoryPreviewContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  marginTop: "20px",
  border: `7px solid ${theme.palette.secondary.main}`,
  borderRadius: "5px",
}));

const CategoryPreviewArticleGrid = styled(Grid)(({ theme }) => ({}));

const MoreButton = styled(StyledButton)(({ theme }) => ({
  width: "97%",
  textAlign: "center",
  marginTop: "20px",
}));

const CategoryHeader = styled("h2")(({ theme }) => ({
  fontSize: "2.75rem",
  margin: "20px",
  color: theme.palette.secondary.dark,
  textAlign: "center",
  fontFamily: "Gluten, Ubuntu",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
}));

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
      <UnstyledLink to={`/${category}`}>
        <MoreButton>See more {category} articles</MoreButton>
      </UnstyledLink>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
