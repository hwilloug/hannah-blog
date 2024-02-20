import { styled, useMediaQuery } from "@mui/material";
import { Article } from "..";
import Categories from "./Categories";
import { UnstyledLink } from "./StyledComponents";

const ArticleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery(theme.breakpoints.down("xs")) ? "column" : "row",
  gap: "20px",

  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "25px 5px",

  padding: "10px",
  margin: "10px",

  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  ":hover": {
    border: `5px solid ${theme.palette.secondary.main}`,
    margin: "6px",
  },
}));

const ArticleDetailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
});

const ArticleTitle = styled("h2")({
  fontSize: "1.5rem",
});

const ArticleSubtitle = styled("h3")({
  fontSize: "18px",
  margin: "3px 0",
  fontWeight: "lighter",
  color: "grey",
});

const ArticleImage = styled("img")(({ theme }) => ({
  width: useMediaQuery(theme.breakpoints.down("xs")) ? "100%" : "13rem",
  objectFit: "cover",
  borderRadius: "5px",
}));

const PortraitArticle = styled(UnstyledLink)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",

  width: useMediaQuery(theme.breakpoints.down("xs")) ? "100%" : "29%",
  padding: "10px",
  marginBottom: "10px",

  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "5px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  ":hover": {
    border: `5px solid ${theme.palette.secondary.main}`,
    margin: "0 -4px -2px -4px",
  },
}));

const PortraitArticleTitle = styled("h2")(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));

const PortraitArticleSubtitle = styled("h3")({
  fontSize: "18px",
  margin: "3px 0",
  fontWeight: "lighter",
  color: "grey",
});

const PortraitArticleImage = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px",
  height: "13rem",
});

interface ArticleCardProps {
  article: Article;
  orientation: "landscape" | "portrait";
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  article,
  orientation,
}) => {
  return orientation === "landscape" ? (
    <UnstyledLink to={`/articles/${article.slug}`} key={article.slug}>
      <ArticleContainer>
        <ArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
          alt={article.imgAlt}
        />
        <ArticleDetailContainer>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
          <ArticleSubtitle>
            <i>{new Date(article.updatedAt).toDateString()}</i>
          </ArticleSubtitle>
          <Categories
            category={article.category}
            subcategories={article.subcategory}
          />
        </ArticleDetailContainer>
      </ArticleContainer>
    </UnstyledLink>
  ) : (
    <PortraitArticle to={`/articles/${article.slug}`} key={article.slug}>
      <PortraitArticleImage
        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
      />
      <PortraitArticleTitle>{article.title}</PortraitArticleTitle>
      <PortraitArticleSubtitle>{article.subtitle}</PortraitArticleSubtitle>
    </PortraitArticle>
  );
};

export default ArticleCard;
