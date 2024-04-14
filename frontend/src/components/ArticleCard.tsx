import { ArrowCircleRightRounded } from "@mui/icons-material";
import { Box, Grid, Paper, styled } from "@mui/material";
import { Article } from "..";
import Categories from "./Categories";
import { UnstyledLink } from "./StyledComponents";

const ArticlePaper = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "5px",

  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  ":hover": {
    outline: `5px solid ${theme.palette.secondary.main}`,
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
        <Grid item xs={8} padding="24px">
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

const PortraitArticleContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  height: "100%",

  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "5px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  ":hover": {
    outline: `5px solid ${theme.palette.secondary.main}`,
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
  borderRadius: "5px 5px 0 0",
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

const PortraitLargeArticleContainer = styled(Box)({
  position: "relative",
  "&:before": {
    // Use a pseudo-element to overlay the gradient
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(21, 21, 24, 0.01) 0%, #151618 100%)",
    zIndex: 1, // Ensure the gradient is below the text
  },
  svg: {
    marginTop: 0,
    opacity: 0,
    color: "white",
    transform: "translate3d(-2rem, 0, 0) rotate(360deg)",
    transition:
      "opacity .2s ease-in-out .1s, transform 0.2s ease-in-out .2s, margin-top 0.2s ease-in-out",
  },
  ":hover": {
    div: {
      bottom: "30%",
      svg: {
        marginTop: "20px",
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotate(0)",
      },
    },
  },
});

const PortraitLargeArticleImage = styled("img")({
  position: "relative",
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px",
  height: "25rem",
  zIndex: 0,
});

const PortraitLargeArticleInfoContainer = styled("div")(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  position: "absolute",
  bottom: 0,
  width: "100%",
  zIndex: 2,
  transition: "bottom .2s ease-in-out",
}));

const PortraitArticleLargeTitle = styled(PortraitArticleTitle)({
  color: "white",
});

const PortraitArticleLargeSubtitle = styled(PortraitArticleSubtitle)({
  color: "white",
});

const LargePortraitArticleCard: React.FC<{ article: Article }> = ({
  article,
}) => {
  return (
    <ArticlePaper>
      <PortraitLargeArticleContainer key={article.slug}>
        <PortraitLargeArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
        />
        <PortraitLargeArticleInfoContainer>
          <PortraitArticleLargeTitle>{article.title}</PortraitArticleLargeTitle>
          <PortraitArticleLargeSubtitle>
            {article.subtitle}
          </PortraitArticleLargeSubtitle>
          <ArrowCircleRightRounded />
        </PortraitLargeArticleInfoContainer>
      </PortraitLargeArticleContainer>
    </ArticlePaper>
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
