import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Clothes from "./containers/Clothes";
import Shoes from "./containers/Shoes";
import Contact from "./containers/Contact";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vestuario" element={<Clothes />}></Route>
            <Route path="/calzado" element={<Shoes />}></Route>
            <Route path="/contacto" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
