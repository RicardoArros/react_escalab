import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import Home from "../containers/Home";
import Clothes from "../containers/Clothes";
import Shoes from "../containers/Shoes";

const routesApp = () => {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vestuario" element={<Clothes />}></Route>
          <Route path="/calzado" element={<Shoes />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default routesApp;
