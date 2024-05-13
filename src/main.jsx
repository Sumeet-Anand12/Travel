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
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import HotelListing from "./pages/HotelPage/HotelListing";
import BookingDetails from "./pages/HotelPage/BookingDetails";

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
      },
      {
        path: "/account-detail",
        element: <AccountDetails />,
      },
      {
        path: "/hotel-listing",
        element: <HotelListing />,
      },
      {
        path: "/booking",
        element: <BookingDetails />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={router} />
  </>
  
)
