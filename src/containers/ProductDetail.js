import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  collection,
  doc,
  getDoc,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import { Layout } from "../components/Reusable";

import {
  ProductDetailImg,
  ProductDetailInfo,
  ProductDetailMain,
  ProductDetailTitle,
  ProductDetailWrap,
} from "../components/Product/ProductStyled";

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

  // const handleAddToCart2 = () => {
  //   alert("Producto añadido");
  // };

  //
  const handleAddToCart = () => {
    //
    let order = {
      buyer: {
        name: "Ricardo",
        email: "rarrosr@gmail.com",
      },
      total: product.cost,
      product: product.id,
      qty: 1,
    };

    console.log(order);

    // Create order
    const createOrderFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));

      //
      await setDoc(newOrderRef, order);

      return newOrderRef;
    };

    //
    createOrderFirestore()
      .then((result) => alert("Su orden ha sido creada\n\n" + result.id))
      .catch((err) => console.log(err));

    // Update product stock
    const updateStockFirestore = async () => {
      const productRef = doc(db, "products", product.id);

      // Set the "stock" field of the product
      await updateDoc(productRef, {
        stock: increment(-1),
      });
    };

    updateStockFirestore();
  };

  useEffect(() => {
    //getProductByIdAPI();

    getProductById(idProduct)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));

    //return () => {};
  }, [idProduct]);

  console.log(product);

  return (
    <Layout>
      <ProductDetailWrap>
        <ProductDetailTitle>
          <h2>Detalles del producto</h2>
        </ProductDetailTitle>

        <ProductDetailMain>
          <ProductDetailImg>
            <img src={product.image} alt="" />
          </ProductDetailImg>

          <ProductDetailInfo>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Precio:{" "}
              {Intl.NumberFormat("es-CL", {
                style: "currency",
                currency: "CLP",
              }).format(product.cost)}
            </p>

            <p>Stock: {product.stock}</p>

            <button onClick={handleAddToCart}>Añadir al carrito</button>
          </ProductDetailInfo>
        </ProductDetailMain>
      </ProductDetailWrap>
    </Layout>
  );
};

export default ProductDetail;
