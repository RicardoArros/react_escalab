import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Layout, MaxWidthCont } from "../components/Reusable";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { idProduct } = useParams();

  const getProductById = async () => {
    await fetch(` https://pg-delsur.herokuapp.com/products/${idProduct}`)
      .then((response) => {
        const data = response.json();

        console.log(data.product);
      })
      .then((data) => {
        setProduct(data);

        console.log(data);
      })
      .catch((error) =>
        console.log(`Hubo un problema con la petición fetch: ${error.message}`)
      );
  };

  useEffect(() => {
    getProductById();

    return () => {};
  }, [idProduct]);

  return (
    <Layout>
      <div> ProductDetail</div>
    </Layout>
  );
};

export default ProductDetail;
