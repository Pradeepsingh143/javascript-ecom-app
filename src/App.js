import React from "react";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";


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
        path : "/productPage/:productId/",
        element : <SingleProduct />
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
