import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ProductCont, ProductInfo } from "./ProductStyled";

const Product = (props) => {
  const { productName, productCost, productImg, productId, productStock } = props;

  return (
    <>
      <ProductCont>
        <div>
          <img src={productImg} alt="" />
        </div>

        <ProductInfo>
          <p>{productName}</p>
          <p>
            {Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(productCost)}
          </p>

          <p>{productStock} unid.</p>
        </ProductInfo>

        <div>
          <Link to={`/product/${productId}`}>Ver detalles</Link>
        </div>
      </ProductCont>
    </>
  );
};

export default Product;
