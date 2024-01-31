import styled from "@emotion/styled";
import { ReactElement, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BodyContainer, StyledButton } from "../components/StyledComponents";
import { mdiArrowLeftThick } from "@mdi/js";
import Icon from "@mdi/react";
import { Article } from "../components/Browse";
import Categories from "../components/Categories";
import axios from "axios";

const ArticlePageContainer = styled(BodyContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 35rem;
  min-width: 35rem;
  align-items: stretch;
`;

const BackButtonContainer = styled.div`
  background-color: darkgrey;
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

const ArticleTitle = styled.h1``;

const ArticleSubtitle = styled.h5`
  color: grey;
  font-weight: lighter;
`;

const ArticleImage = styled.img`
  max-height: 30rem;
  width: 100%;
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
`;

const ArticlePage: React.FunctionComponent = (): ReactElement => {
  let { articleSlug } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [loadedArticle, setLoadedArticle] = useState<ReactElement | null>(null);
  const [articleInfo, setArticleInfo] = useState<Article>();

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

  useMemo(() => {
    const getArticleInfo = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_API_URL}/articles/${articleSlug}`,
        );
        setArticleInfo({
          slug: resp.data.Slug,
          title: resp.data.Title,
          subtitle: resp.data.Subtitle,
          img: resp.data.Img,
          category: resp.data.Category,
          subcategory: resp.data.Subcategory,
          createdAt: resp.data.CreatedAt,
        });
      } catch (e) {
        console.error(
          "Error loading article info for article:",
          articleSlug,
          e,
        );
      }
    };

    return getArticleInfo();
  }, [articleSlug]);

  return (
    <ArticlePageContainer>
      <BackButtonContainer>
        <BackButton onClick={goBack}>
          <Icon path={mdiArrowLeftThick} size={1} />
          Back
        </BackButton>
      </BackButtonContainer>
      <ArticleContainer>
        <ArticleImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${articleInfo?.img}`}
        />
        <ArticleTitle>{articleInfo?.title}</ArticleTitle>
        <ArticleSubtitle>
          <p>{articleInfo?.subtitle}</p>
          <p>{articleInfo?.createdAt}</p>
        </ArticleSubtitle>
        <Categories
          category={articleInfo?.category || ""}
          subcategories={articleInfo?.subcategory || []}
        />
        <Divider />
        {loadedArticle}
        <SignatureContainer>
          <Signature>Written by Hannah Willoughby</Signature>
          <Signature>{articleInfo?.createdAt}</Signature>
        </SignatureContainer>
      </ArticleContainer>
    </ArticlePageContainer>
  );
};

export default ArticlePage;
