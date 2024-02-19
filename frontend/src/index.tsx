import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  defer,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import About from "./pages/About";
import ArticlePage from "./pages/Article";
import CategoryBrowse from "./pages/CategoryBrowse";
import HomePage from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

export interface CommentsApiResponse {
  id: string;
  timestamp: string;
  body: string;
  username: string;
  article_slug: string;
}

export interface ArticleApiResponse {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  img_alt: string;
  category: string;
  subcategory: string[];
  created_at: string;
  updated_at: string;
  comments: CommentsApiResponse[];
}

export interface ArticlesApiResponse {
  articles: ArticleApiResponse[];
  count: number;
}

export interface ApiResponse {
  article: ArticleApiResponse;
  comments: CommentsApiResponse[];
}

export interface Comment {
  id: string;
  timestamp: string;
  body: string;
  username: string;
  articleSlug: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  imgAlt: string;
  category: string;
  subcategory: string[];
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
}

const articlesLoader: LoaderFunction = ({ params, request }) => {
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : undefined;

  const searchParams = new URL(request.url).searchParams;
  const subcategory = searchParams.get("subcategory");
  const page = searchParams.get("page");

  let url = `${process.env.REACT_APP_API_URL}/articles`;
  let query: string[] = [];
  if (category) {
    query.push(`category=${category}`);
  }
  if (subcategory) {
    query.push(`subcategory=${subcategory}`);
  }
  if (page) {
    query.push(`page=${page}`);
  }

  if (query.length) {
    url += "?" + query.join("&");
  }

  return defer({
    articles: axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  });
};

const articleLoader: LoaderFunction = ({ params }) => {
  return defer({
    article: axios.get(
      `${process.env.REACT_APP_API_URL}/articles/${params.articleSlug}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    ),
  });
};

export const mapRespToArticle = (resp: ApiResponse) => {
  return {
    title: resp.article.title,
    slug: resp.article.slug,
    subtitle: resp.article.subtitle,
    img: resp.article.img,
    imgAlt: resp.article.img_alt,
    category: resp.article.category,
    subcategory: resp.article.subcategory,
    createdAt: resp.article.created_at,
    updatedAt: resp.article.updated_at,
    comments: resp.comments.map(
      (comment) =>
        ({
          id: comment.id,
          timestamp: comment.timestamp,
          body: comment.body,
          username: comment.username,
          articleSlug: comment.article_slug,
        }) as Comment,
    ),
  } as Article;
};

export const mapRespToArticles = (resp: ArticlesApiResponse) => {
  return resp.articles.map((r) =>
    mapRespToArticle({ article: r, comments: [] }),
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: articlesLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "articles/:articleSlug",
        element: <ArticlePage />,
        loader: articleLoader,
      },
      {
        path: "articles",
        element: <CategoryBrowse />,
        loader: articlesLoader,
      },
      {
        path: ":category",
        element: <CategoryBrowse />,
        loader: articlesLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
