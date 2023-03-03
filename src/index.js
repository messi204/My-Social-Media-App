import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/Root";
import PostDetail from "./Pages/PostDetail"
import ErrorPage from "./Pages/ErrorPage"
import Posts from "./Pages/Posts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
     errorElement:<ErrorPage/>,
    children: [
      { index:true, element:<Home/> },
      {  path: "post", element: <Posts /> },
      {  path: "post/:id", element: <PostDetail/>  },
      {  path: "/:id", element: <PostDetail/>  },
        
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
