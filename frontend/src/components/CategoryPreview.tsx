import { styled, useMediaQuery } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Article, ArticlesApiResponse, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { CategoryB, StyledButton, StyledP } from "./StyledComponents";

const CategoryPreviewContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  marginTop: "20px",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "5px",
  minWidth: "100%",
}));

const CategoryPreviewArticleContainer = styled("div")(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("xs")) ? "block" : "flex",
  flexDirection: "row",
  gap: "10px",
}));

const Header = styled("div")(({ theme }) => ({
  padding: "20px 50px",
  margin: "20px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.secondary.main}`,
}));

const MoreButton = styled(StyledButton)(({ theme }) => ({
  width: "97%",
  textAlign: "center",
}));

interface CategoryPreviewProps {
  category: string;
  message: string;
  emoji: string;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  category,
  message,
  emoji,
}) => {
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
      <Header>
        <StyledP>
          {emoji} <CategoryB>{category}</CategoryB>
        </StyledP>
        <StyledP>{message}</StyledP>
      </Header>
      <CategoryPreviewArticleContainer>
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            orientation="portrait"
          />
        ))}
      </CategoryPreviewArticleContainer>
      <MoreButton>See more {category} articles</MoreButton>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
