import React, {Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "./components/Loader.spinner";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ProductProvider = lazy(() => import("./context/Product.state"));
const GoToTop = lazy(() => import("./components/GoToTop"));

function App() {
  const Layout = () => (
    <>
      <GoToTop />
      <Header />
      <Suspense fallback={<Loader />}>
      <Outlet />
      </Suspense>
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
