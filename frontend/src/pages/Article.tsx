import styled from "@emotion/styled";
import { ReactElement, Suspense, useMemo, useState } from "react";
import { Await, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  BodyContainer,
  BreakPointProps,
  StyledButton,
} from "../components/StyledComponents";
import { mdiArrowLeftThick } from "@mdi/js";
import Icon from "@mdi/react";
import Categories from "../components/Categories";
import { Article, mapRespToArticle } from "..";
import { useMediaQuery, useTheme } from "@mui/material";
import { AxiosResponse } from "axios";
import Loading from "../components/Loading";

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
  const data = useLoaderData() as { article: Promise<AxiosResponse<any, any>> };
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
      <Suspense fallback={<Loading />}>
        <Await
          resolve={data.article}
          errorElement={<p>Error loading article!</p>}
        >
          {(resp) => {
            if (resp === undefined) {
              return <p>404 not found??</p>;
            }

            const article: Article = mapRespToArticle(resp.data);
            return (
              <ArticleContainer>
                <ArticleImage
                  src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
                />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleSubtitle>
                  <p>{article.subtitle}</p>
                  <p>{article.createdAt}</p>
                </ArticleSubtitle>
                <Categories
                  category={article.category || ""}
                  subcategories={article.subcategory || []}
                />
                <Divider />
                {loadedArticle}
                <SignatureContainer>
                  <Signature>Written by Hannah Willoughby</Signature>
                  <Signature>{article.createdAt}</Signature>
                </SignatureContainer>
              </ArticleContainer>
            );
          }}
        </Await>
      </Suspense>
    </ArticlePageContainer>
  );
};

export default ArticlePage;
