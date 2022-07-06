import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ProductCont } from "./ProductStyled";

const Product = (props) => {
  const { productName, productCost, productImg, productId } = props;

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

        <div>
          <Link to={`/product/${productId}`}>Ver detalles</Link>
        </div>
      </ProductCont>
    </>
  );
};

export default Product;
