import React from "react";

import { ProductCont } from "./ProductStyled";

const Product = (props) => {
  const { productName, productCost, productImg } = props;

  return (
    <>
      <ProductCont>
        <div>
          <img src={productImg} alt="" />
        </div>
        <div>
          <p>{productName}</p>
          <p>
            {Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(productCost)}
          </p>
        </div>
      </ProductCont>
    </>
  );
};

export default Product;
