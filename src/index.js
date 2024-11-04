import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import { RouterProvider } from 'react-router-dom';
// asa bhi kr sakta ha imporat aur asa bhi

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./components/auth/sign-in/SignIn";
import SignUp from "./components/auth/sign-up/SignUp";
// ya asa bhi kr sakta ha imporat

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Page Not Found</h1>

  },

  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
