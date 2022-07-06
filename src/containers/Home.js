import React from "react";

import styled from "styled-components";

import HomeProducts from "../components/Home/HomeProducts/HomeProducts";

export const HomeWrap = styled.div``;

const Home = () => {
  return (
    <HomeWrap>
      <HomeProducts />
    </HomeWrap>
  );
};

export default Home;
