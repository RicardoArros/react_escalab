import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Layout } from "../components/Reusable";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { idProduct } = useParams();

  console.log(idProduct);

  const getProductById = async () => {
    await fetch(` https://pg-delsur.herokuapp.com/products/${idProduct}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(`Hubo un problema con la petición fetch: ${error.message}`))
      ;
  };

  useEffect(() => {
    getProductById();

    //return () => {};
  }, []);

  console.log(product);

  return (
    <Layout>
      <div>
        <h2>Detalles del producto</h2>
        <p>{product.name}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
