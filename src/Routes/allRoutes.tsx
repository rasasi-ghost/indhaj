import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import DashboardEcommerce from "../pages/DashboardEcommerce";
import Widgets from "pages/Widgets/Index";
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";
import Dashboard from "../pages/Dashboard";
import Chances from "../pages/Chances/Index";
// //login
// import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Registration/Index";
import MyProjects from "../pages/MyProjects/Index";
import Login from "../pages/Login/Index"
import Home from "../pages/Home/Index"
import SuccessPage from "pages/Success/Index";
// // User Profile
import UserProfile from "../pages/Authentication/user-profile";
import AddNewProject from "../pages/AddNewProject/index";

const authProtectedRoutes = [

  // dashboard
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <DashboardEcommerce /> },
  { path: "/widgets", component: <Widgets /> },
  //User Profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/chances", component: <Chances /> },
  { path: 'myprojects', component: <MyProjects /> },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "*", component: <Navigate to="/home" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  { path: "/add-new-project", component: <AddNewProject /> },
  { path: "/home", component: <Home /> },
  { path: "/success", component: <SuccessPage /> },

  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };