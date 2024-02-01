import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
  defer,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./Layout";
import ArticlePage from "./pages/Article";
import { ThemeProvider } from "@mui/material";
import CategoryBrowse from "./pages/CategoryBrowse";
import About from "./pages/About";
import axios from "axios";
import { theme } from "./theme";

export interface ArticleApiResponse {
  Slug: string;
  Title: string;
  Subtitle: string;
  Img: string;
  Category: string;
  Subcategory: string[];
  CreatedAt: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  category: string;
  subcategory: string[];
  createdAt: string;
}

const articlesLoader: LoaderFunction = ({ params }) => {
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : undefined;

  return defer({
    articles: axios.get(
      `${process.env.REACT_APP_API_URL}/articles${category ? "?category=" + category : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    ),
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

export const mapRespToArticle = (resp: ArticleApiResponse) => {
  return {
    title: resp.Title,
    slug: resp.Slug,
    subtitle: resp.Subtitle,
    img: resp.Img,
    category: resp.Category,
    subcategory: resp.Subcategory,
    createdAt: resp.CreatedAt,
  } as Article;
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
