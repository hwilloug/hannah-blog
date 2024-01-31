import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  LoaderFunction,
  LoaderFunctionArgs,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./Layout";
import ArticlePage from "./pages/Article";
import { ThemeProvider, createTheme } from "@mui/material";
import CategoryBrowse from "./pages/CategoryBrowse";
import About from "./pages/About";
import axios from "axios";

export interface ArticlesApiResponse {
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

const articleLoader: LoaderFunction = async ({ params }) => {
  const category = params.category
    ? params.category.split("")[0].toUpperCase() +
      params.category.split("").splice(1).join("")
    : undefined;

  try {
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/articles${category ? "?category=" + category : ""}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return resp.data.map((d: ArticlesApiResponse) => ({
      slug: d.Slug,
      title: d.Title,
      subtitle: d.Subtitle,
      img: d.Img,
      category: d.Category,
      subcategory: d.Subcategory,
      createdAt: d.CreatedAt,
    }));
  } catch (e) {
    console.error("Error getting articles", e);
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: articleLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "articles/:articleSlug",
        element: <ArticlePage />,
      },
      {
        path: ":category",
        element: <CategoryBrowse />,
        loader: articleLoader,
      },
    ],
  },
]);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 652,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

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
