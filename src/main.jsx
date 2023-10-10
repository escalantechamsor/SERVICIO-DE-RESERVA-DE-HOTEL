import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error-page";
import Homepage from "./pages/homepage";
import Welcome from "./pages/welcome";
import Catalog from "./pages/catalog";
import Reservation from "./pages/reservation";
import About from "./pages/about";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: 'homepage',
        element: < Welcome/>,
       },
       {
        path: 'catalog',
        element: < Catalog/>,
       },
       {
        path: 'reservation',
        element: < Reservation/>,
       },
       {
        path: 'about',
        element: < About/>,
       },
       
    ]
  },
  {
    index: true,
    element: <Homepage />,
  
    
  },


 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
