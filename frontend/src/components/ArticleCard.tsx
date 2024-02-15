import styled from "@emotion/styled";
import {
  BreakPointProps,
  ColorProps,
  CssProps,
  UnstyledLink,
} from "./StyledComponents";
import { useMediaQuery, useTheme } from "@mui/material";
import Categories from "./Categories";
import { Article } from "..";

const ArticleContainer = styled.div<CssProps>`
  display: flex;
  flex-direction: ${(props) => (props.break ? "column" : "row")};
  gap: 20px;

  border: 1px solid ${(props) => props.colors.primary.dark};
  border-radius: 25px 5px;

  width: ${(props) => (props.break ? "90vw" : "35rem")};
  padding: 10px;
  margin: 20px 0;

  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};

  :hover {
    border: 5px solid ${({ colors }) => colors.secondary.main};
    margin: 16px;
  }
`;

const ArticleDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
`;

const ArticleSubtitle = styled.h3`
  font-size: 18px;
  margin: 3px 0;
  font-weight: lighter;
  color: grey;
`;

const ArticleImage = styled.img<BreakPointProps>`
  width: ${(props) => (props.break ? "100%" : "13rem")};
  object-fit: cover;
  border-radius: 5px;
`;

const PortraitArticle = styled(UnstyledLink)<CssProps>`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: ${(props) => (props.break ? "100%" : "29%")};
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid black;
  border-radius: 5px;
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};

  :hover {
    border: 5px solid ${({ colors }) => colors.secondary.main};
  }
`;

const PortraitArticleTitle = styled.h2<ColorProps>`
  font-size: 1.25rem;

  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
`;

const PortraitArticleSubtitle = styled.h3`
  font-size: 18px;
  margin: 3px 0;
  font-weight: lighter;
  color: grey;
`;

const PortraitArticleImage = styled.img<BreakPointProps>`
  width: 100%
  object-fit: cover;
  border-radius: 5px;
  object-fit: cover;
  height: 13rem;
`;

interface ArticleCardProps {
  article: Article;
  orientation: "landscape" | "portrait";
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  article,
  orientation,
}) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("xs"));

  return orientation === "landscape" ? (
    <UnstyledLink to={`/articles/${article.slug}`} key={article.slug}>
      <ArticleContainer break={sm} colors={theme.palette}>
        <ArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
          break={sm}
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
    <PortraitArticle
      to={`/articles/${article.slug}`}
      break={sm}
      colors={theme.palette}
      key={article.slug}
    >
      <PortraitArticleImage
        src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
        break={sm}
      />
      <PortraitArticleTitle colors={theme.palette}>
        {article.title}
      </PortraitArticleTitle>
      <PortraitArticleSubtitle>{article.subtitle}</PortraitArticleSubtitle>
    </PortraitArticle>
  );
};

export default ArticleCard;
