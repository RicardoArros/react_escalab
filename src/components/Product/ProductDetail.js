import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { idProduct } = useParams();

  const getProductById = async () => {
    await fetch(` https://pg-delsur.herokuapp.com/products/${idProduct}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.log(`Hubo un problema con la petición fetch: ${error.message}`)
      );
  };

  useEffect(() => {
    getProductById();

    return () => {};
  }, []);

  return (
    <div>
      ProductDetail<div>{product.name}</div>
    </div>
  );
};

export default ProductDetail;
