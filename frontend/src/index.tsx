import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./Layout";
import ArticlePage from "./pages/Article";
import { ThemeProvider, createTheme } from "@mui/material";
import CategoryBrowse from "./pages/CategoryBrowse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "articles/:articleSlug",
        element: <ArticlePage />,
      },
      {
        path: "food",
        element: <CategoryBrowse category="Food" />,
      },
      {
        path: "gardening",
        element: <CategoryBrowse category="Gardening" />,
      },
      {
        path: "crafts",
        element: <CategoryBrowse category="Crafts" />,
      },
      {
        path: "coding",
        element: <CategoryBrowse category="Coding" />,
      },
      {
        path: "books",
        element: <CategoryBrowse category="Books" />,
      },
      {
        path: "languages",
        element: <CategoryBrowse category="Languages" />,
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
