import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import { Layout } from "../components/Reusable";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { idProduct } = useParams();

  console.log(idProduct);

  // GET PRODUCT BY API
  // const getProductByIdAPI = async () => {
  //   await fetch(` https://pg-delsur.herokuapp.com/products/${idProduct}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.log(`Hubo un problema con la petición fetch: ${error.message}`))
  //     ;
  // };

  // GET PRODUCT BY FIRESTORE DB
  const getProductById = async () => {
    const docRef = doc(db, "products", idProduct);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());

      return {
        id: idProduct,
        ...docSnap.data(),
      };
    } else {
      console.log("No existe el documento");
    }
  };

  useEffect(() => {
    //getProductByIdAPI();

    getProductById(idProduct)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));

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
