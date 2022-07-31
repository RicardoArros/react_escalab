import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import NavBar from "../components/NavBar/NavBar";

import Home from "../containers/Home";

import ProductDetail from "../containers/ProductDetail";
import ProductCategory from "../containers/ProductCategory";

const routesApp = () => {
  return (
    <>
      <Router>
        <ScrollToTop />

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
          <Route path="/category/:idCategory" element={<ProductCategory />} />
        </Routes>
      </Router>
    </>
  );
};

export default routesApp;
