import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import NavBar from "../components/NavBar/NavBar";

import Home from "../containers/Home";

import ProductDetail from "../components/Product/ProductDetail";
import Products from "../components/Product/Products";

const routesApp = () => {
  return (
    <>
      <Router>
        <ScrollToTop />

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:idProduct" element={<ProductDetail />}></Route>
          <Route path="/category/:idCategory" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default routesApp;
