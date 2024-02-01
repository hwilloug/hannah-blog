import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  BodyContainer,
  BreakPointProps,
  StyledButton,
} from "../components/StyledComponents";
import { mdiArrowLeftThick } from "@mdi/js";
import Icon from "@mdi/react";
import Categories from "../components/Categories";
import { Article } from "..";
import { useMediaQuery, useTheme } from "@mui/material";

const ArticlePageContainer = styled(BodyContainer)<BreakPointProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: ${(props) => (props.break ? "90%" : "35rem")};
  min-width: ${(props) => (props.break ? "90%" : "35rem")};
  align-items: stretch;
`;

const BackButtonContainer = styled.div`
  padding: 10px;
`;

const BackButton = styled(StyledButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ArticleContainer = styled.div`
  background-color: white;
  padding: 20px;
`;

const ArticleTitle = styled.p`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ArticleSubtitle = styled.p`
  color: grey;
  font-weight: lighter;
`;

const ArticleImage = styled.img`
  display: block;
  max-height: 30rem;
  min-width: 100%;
  object-fit: cover;
`;

const Divider = styled.hr`
  margin: 20px 0;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Signature = styled.p`
  font-style: italic;
  font-weight: lighter;
  margin: 5px;
  color: grey;
`;

const ArticlePage: React.FunctionComponent = (): ReactElement => {
  let { articleSlug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const articleInfo = useLoaderData() as Article;
  const sm = useMediaQuery(theme.breakpoints.down("xs"));

  const goBack = () => {
    navigate(-1);
  };

  const [loadedArticle, setLoadedArticle] = useState<ReactElement | null>(null);

  useMemo(() => {
    const lazyLoadArticle = async () => {
      try {
        const articleComponent = await import(
          /* webpackMode: "lazy-once" */ `../articles/${articleSlug}`
        );
        setLoadedArticle(articleComponent.default);
      } catch (e) {
        console.error("Error loading article component:", e);
      }
    };

    lazyLoadArticle();
  }, [articleSlug]);

  return (
    <ArticlePageContainer break={sm}>
      <BackButtonContainer>
        <BackButton onClick={goBack} colors={theme.palette}>
          <Icon path={mdiArrowLeftThick} size={1} />
          Back
        </BackButton>
      </BackButtonContainer>
      <ArticleContainer>
        <ArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${articleInfo?.img}`}
        />
        <ArticleTitle>{articleInfo.title}</ArticleTitle>
        <ArticleSubtitle>
          <p>{articleInfo.subtitle}</p>
          <p>{articleInfo.createdAt}</p>
        </ArticleSubtitle>
        <Categories
          category={articleInfo.category || ""}
          subcategories={articleInfo.subcategory || []}
        />
        <Divider />
        {loadedArticle}
        <SignatureContainer>
          <Signature>Written by Hannah Willoughby</Signature>
          <Signature>{articleInfo.createdAt}</Signature>
        </SignatureContainer>
      </ArticleContainer>
    </ArticlePageContainer>
  );
};

export default ArticlePage;
