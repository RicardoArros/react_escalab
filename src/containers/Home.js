import React from "react";

import styled from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import  HomeProducts from "../components/Home/HomeProducts/HomeProducts";

export const HomeWrap = styled.div``;

const Home = () => {
  return (
    <HomeWrap>
      <NavBar />

      <HomeProducts />
    </HomeWrap>
  );
};

export default Home;
