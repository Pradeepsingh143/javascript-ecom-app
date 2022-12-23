import React from "react";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


const Layout = () =>(
  <>
  <Header />
  <Outlet />
  <Footer />
  </>
)

const Router = createBrowserRouter([
  {
    path : "",
    element : <Layout />,
    children: [
      {
        path : "/",
        element : <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path : "/productPage/:productId/",
        element : <SingleProduct />
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : "/checkout",
        element : <Checkout />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
