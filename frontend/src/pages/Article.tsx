import { mdiArrowLeftThick } from "@mdi/js";
import Icon from "@mdi/react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { ReactElement, Suspense, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { Await, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Article, mapRespToArticle } from "..";
import Categories from "../components/Categories";
import CommentsSection from "../components/CommentsSection";
import Loading from "../components/Loading";
import RelatedArticles from "../components/RelatedArticles";
import {
  BodyContainer,
  ContainerContainer,
  StyledButton,
} from "../components/StyledComponents";

const ArticlePageContainer = styled(BodyContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "stretch",
  maxWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90%" : "35rem",
  minWidth: useMediaQuery(theme.breakpoints.down("xs")) ? "90%" : "35rem",
}));

const ArticleContainerContainer = styled(ContainerContainer)({
  marginBottom: "50px",
});

const BackButtonContainer = styled("div")({
  padding: "10px",
});

const BackButton = styled(StyledButton)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const ArticleContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  padding: "20px",
  border: "1px solid black",
  borderRadius: "5px",
}));

const ArticleTitle = styled("h2")({
  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
  fontSize: "2.5rem",
  marginBottom: "10px",
  fontWeight: "normal",
});

const ArticleSubtitle = styled("h3")({
  color: "grey",
  fontWeight: "lighter",
  fontSize: "1.2rem",
});

const ArticleImage = styled("img")({
  display: "block",
  maxHeight: "30rem",
  maxWidth: "100%",
  objectFit: "cover",
});

const Divider = styled("hr")({
  margin: "20px 0",
});

const SignatureContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const Signature = styled("p")({
  fontStyle: "italic",
  fontWeight: "lighter",
  margin: "5px",
  color: "grey",
});

const LikesContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5px",
  margin: "10px",
});

interface LikesProps {
  slug: string;
  likes: number;
}

const Likes: React.FC<LikesProps> = ({ slug, likes }) => {
  const cookieName = "hannahshobbyroom-likes";
  const [cookies, setCookie] = useCookies([cookieName]);
  const theme = useTheme();

  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(likes);

  useMemo(() => {
    if (cookies[cookieName] && cookies[cookieName][slug]) {
      setLiked(true);
    }
  }, [cookies]);

  const toggleLike = () => {
    const newValue = !liked;
    try {
      axios.post(`${process.env.REACT_APP_API_URL}/articles/${slug}/like`, {
        decrease: !newValue,
      });
      if (newValue) {
        setCookie(cookieName, { ...cookies[cookieName], [slug]: true });
        setNumLikes(numLikes + 1);
      } else {
        let newCookies = { ...cookies[cookieName] };
        delete newCookies[slug];
        setCookie(cookieName, newCookies);
        setNumLikes(numLikes - 1);
      }
    } catch (e) {
      console.log(e);
    }

    setLiked(newValue);
  };

  return (
    <LikesContainer onClick={toggleLike}>
      <ThumbUpAltIcon color={liked ? "secondary" : "primary"} /> {numLikes}
    </LikesContainer>
  );
};

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
    <ArticlePageContainer>
      <BackButtonContainer>
        <BackButton onClick={goBack}>
          <Icon path={mdiArrowLeftThick} size={1} />
          Back
        </BackButton>
      </BackButtonContainer>
      <Suspense fallback={<Loading />}>
        <Await
          resolve={data.article}
          errorElement={
            process.env.NODE_ENV === "development" ? (
              <ArticleContainer>{loadedArticle}</ArticleContainer>
            ) : (
              <p>Error loading article!</p>
            )
          }
        >
          {(resp) => {
            if (resp === undefined) {
              return <p>404 not found??</p>;
            }

            const article: Article = mapRespToArticle(resp.data);
            return (
              <>
                <ArticleContainerContainer>
                  <ArticleContainer>
                    <ArticleImage
                      src={`${process.env.REACT_APP_IMAGES_BASE_URL}/${article.img}`}
                      alt={article.imgAlt}
                    />
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleSubtitle>
                      <p>{article.subtitle}</p>
                      <p>{new Date(article.createdAt).toDateString()}</p>
                    </ArticleSubtitle>
                    <Categories
                      category={article.category || ""}
                      subcategories={article.subcategory || []}
                    />
                    <Likes slug={article.slug} likes={article.likes} />
                    <Divider />
                    {loadedArticle}
                    <SignatureContainer>
                      <Signature>Written by Hannah Willoughby</Signature>
                      <Signature>
                        Published: {new Date(article.createdAt).toDateString()}
                      </Signature>
                      {article.createdAt !== article.updatedAt && (
                        <Signature>
                          Updated: {new Date(article.updatedAt).toDateString()}
                        </Signature>
                      )}
                      <Likes slug={article.slug} likes={article.likes} />
                    </SignatureContainer>
                  </ArticleContainer>
                </ArticleContainerContainer>
                <CommentsSection />
                <RelatedArticles
                  category={article.category}
                  subcategory={article.subcategory[0]}
                  slug={article.slug}
                />
              </>
            );
          }}
        </Await>
      </Suspense>
    </ArticlePageContainer>
  );
};

export default ArticlePage;
