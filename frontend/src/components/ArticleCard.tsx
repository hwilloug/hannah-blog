import { Box, Container, Grid, Paper, styled } from "@mui/material";
import { Article } from "..";
import Categories from "./Categories";
import { UnstyledLink } from "./StyledComponents";

const ArticlePaper = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "25px 5px",
  padding: "20px",

  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  ":hover": {
    border: `5px solid ${theme.palette.secondary.main}`,
  },
}));

const ArticleTitle = styled("h2")({
  fontSize: "1.5rem",
});

const ArticleSubtitle = styled("h3")({
  fontSize: "18px",
  fontWeight: "lighter",
  color: "grey",
});

const ArticleImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
}));

const LandscapeArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <ArticlePaper key={article.slug}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ArticleImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
            alt={article.imgAlt}
          />
        </Grid>
        <Grid item xs={8}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleSubtitle>{article.subtitle}</ArticleSubtitle>
          <ArticleSubtitle>
            <i>{new Date(article.updatedAt).toDateString()}</i>
          </ArticleSubtitle>
          <Categories
            category={article.category}
            subcategories={article.subcategory}
          />
        </Grid>
      </Grid>
    </ArticlePaper>
  );
};

const PortraitArticleContainer = styled(Container)(({ theme }) => ({
  textAlign: "center",
  paddingTop: "16px",
  height: "100%",

  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "5px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  ":hover": {
    border: `5px solid ${theme.palette.secondary.main}`,
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
  maxHeight: "200px",
});

const PortraitArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Paper sx={{ height: "100%" }}>
      <PortraitArticleContainer key={article.slug}>
        <PortraitArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
        />
        <PortraitArticleTitle>{article.title}</PortraitArticleTitle>
        <PortraitArticleSubtitle>{article.subtitle}</PortraitArticleSubtitle>
      </PortraitArticleContainer>
    </Paper>
  );
};

const PortraitLargeArticleContainer = styled(Box)({});

const PortraitLargeArticleImage = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px 5px 0 0",
  height: "25rem",
});

const PortraitLargeArticleInfoContainer = styled("div")({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "0 0 5px 5px",
  textAlign: "center",
});

const LargePortraitArticleCard: React.FC<{ article: Article }> = ({
  article,
}) => {
  return (
    <PortraitLargeArticleContainer key={article.slug}>
      <PortraitLargeArticleImage
        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
      />
      <PortraitLargeArticleInfoContainer>
        <PortraitArticleTitle>{article.title}</PortraitArticleTitle>
        <PortraitArticleSubtitle>{article.subtitle}</PortraitArticleSubtitle>
      </PortraitLargeArticleInfoContainer>
    </PortraitLargeArticleContainer>
  );
};

interface ArticleCardProps {
  article: Article;
  orientation: "landscape" | "portrait" | "portrait-large";
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  article,
  orientation,
}) => {
  return (
    <UnstyledLink
      to={`/articles/${article.slug}`}
      key={article.slug}
      sx={{ display: "inline-block", height: "100%", width: "100%" }}
    >
      {orientation === "landscape" ? (
        <LandscapeArticleCard article={article} />
      ) : orientation === "portrait" ? (
        <PortraitArticleCard article={article} />
      ) : (
        <LargePortraitArticleCard article={article} />
      )}
    </UnstyledLink>
  );
};

export default ArticleCard;
