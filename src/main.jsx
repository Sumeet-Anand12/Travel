import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import App from './App';
import Layout from './component/Layout/Layout';
import Tour from './pages/TourDetails/Tour';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tour",
        element: <Tour />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={router} />
  </>
  
)
