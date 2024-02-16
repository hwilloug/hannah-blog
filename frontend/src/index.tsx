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
}

const articlesLoader: LoaderFunction = ({ params, request }) => {
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : undefined;

  const subcategory = new URL(request.url).searchParams.get("subcategory");

  let url = `${process.env.REACT_APP_API_URL}/articles`;
  if (category && subcategory) {
    url += `?category=${category}&subcategory=${subcategory}`;
  } else if (category) {
    url += `?category=${category}`;
  } else if (subcategory) {
    url += `?subcategory=${subcategory}`;
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

export const mapRespToArticle = (resp: ArticleApiResponse) => {
  return {
    title: resp.title,
    slug: resp.slug,
    subtitle: resp.subtitle,
    img: resp.img,
    imgAlt: resp.img_alt,
    category: resp.category,
    subcategory: resp.subcategory,
    createdAt: resp.created_at,
    updatedAt: resp.updated_at,
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
