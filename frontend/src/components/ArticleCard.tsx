import { ArrowCircleRightRounded } from "@mui/icons-material";
import { Box, Grid, Paper, styled, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import { Article } from "..";
import Categories from "./Categories";
import { UnstyledLink } from "./StyledComponents";
import WindowFrame from "./WindowFrame";

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

  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "5px",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
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
  height: "150px",
});

const PortraitArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        alignItems: "stretch",
      }}
    >
      <WindowFrame
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: "100%",
        }}
        childrenStyle={{}}
      >
        <PortraitArticleContainer key={article.slug} style={{ height: "100%" }}>
          <PortraitArticleImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
          />
          <PortraitArticleTitle>{article.title}</PortraitArticleTitle>
        </PortraitArticleContainer>
      </WindowFrame>
    </Paper>
  );
};

const PortraitLargeArticleContainer = styled(Box)(({ theme }) => ({
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
    marginBottom: 0,
    opacity: 0,
    transform: "translate3d(-2rem, 0, 0) rotate(360deg)",
    transition:
      "opacity .2s ease-in-out .1s, transform 0.2s ease-in-out .2s, margin-top 0.2s ease-in-out, margin-bottom 0.2s ease-in-out",
  },
  ":hover": {
    div: {
      svg: {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotate(0)",
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
  },
}));

const PortraitLargeArticleImage = styled("img")({
  position: "relative",
  width: "100%",
  objectFit: "cover",
  borderRadius: "5px",
  height: "15rem",
  zIndex: 0,
});

const PortraitLargeArticleInfoContainer = styled("div")(({ theme }) => ({
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
          <ArrowCircleRightRounded color="warning" />
        </PortraitLargeArticleInfoContainer>
      </PortraitLargeArticleContainer>
    </ArticlePaper>
  );
};

interface ArticleCardProps {
  article: Article;
  orientation: "landscape" | "portrait" | "portrait-large";
  style?: CSSProperties;
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  article,
  orientation,
  style,
}) => {
  return (
    <UnstyledLink
      to={`/articles/${article.slug}`}
      key={article.slug}
      sx={{
        display: "inline-block",
        height: "100%",
        width: "100%",
        borderRadius: "5px",
      }}
      style={style}
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
