import { styled, useMediaQuery } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Article, ArticlesApiResponse, mapRespToArticles } from "..";
import ArticleCard from "./ArticleCard";
import { StyledButton, SubsectionHeader } from "./StyledComponents";

const CategoryPreviewContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: "10px",
  borderRadius: "5px",
}));

const CategoryPreviewArticleContainer = styled("div")(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.down("xs")) ? "block" : "flex",
  flexDirection: "row",
  gap: "10px",
}));

const MoreButton = styled(StyledButton)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
}));

const CategoryPreview: React.FC<{ category: string }> = ({ category }) => {
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
      <SubsectionHeader>Latest {category} Articles:</SubsectionHeader>
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
