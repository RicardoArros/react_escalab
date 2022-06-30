import React from "react";

import { ProductsWrap } from "./HomeProductsStyled";

import Products from "../../Product/Products";

import { MaxWidthCont } from "../../Reusable";

const HomeProducts = () => {
  return (
    <ProductsWrap>
      <MaxWidthCont>
        <Products />
      </MaxWidthCont>
    </ProductsWrap>
  );
};

export default HomeProducts;
