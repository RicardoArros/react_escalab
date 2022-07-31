import React from "react";

import { ProductsWrap } from "./HomeProductsStyled";

import Products from "../../Product/Products";

const HomeProducts = () => {
  return (
    <ProductsWrap>
      <Products />
    </ProductsWrap>
  );
};

export default HomeProducts;
