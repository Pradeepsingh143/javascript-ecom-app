import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductProvider from "./context/Product.state";
import GoToTop from "./components/GoToTop";


function App() {
  const Layout = () => (
    <>
     <GoToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const Router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/productPage/:id/",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);


  return (
    <ProductProvider>
        <RouterProvider router={Router} />
    </ProductProvider>
  );
}

export default App;
