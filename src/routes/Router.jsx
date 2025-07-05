import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default Router;
