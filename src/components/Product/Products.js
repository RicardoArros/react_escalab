import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

import Product from "./Product";
import { ProductsCont } from "./ProductStyled";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  // GET PRODUCTS BY API
  const getProductsAPI = async () => {
    console.log(idCategory);

    const url = idCategory !== null
      ? `https://pg-delsur.herokuapp.com/products?categoryId=${idCategory}`
      : "https://pg-delsur.herokuapp.com/products";

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  };

  // GET PRODUCTS BY FIRESTORE DB
  // const getProducts = async () => {
  //   let queryList;

  //   if (idCategory) {
  //     queryList = query(
  //       collection(db, "products"),
  //       where("categoryId", "==", parseInt(idCategory))
  //     );

  //   } else {
  //     queryList = query(collection(db, "products"));
  //   }

  //   const querySnapshot = await getDocs(queryList);

  //   // const querySnapshot = await getDocs(collection(db, "products"));

  //   return querySnapshot.docs.map((document) => ({
  //     id: document.id,
  //     ...document.data(),
  //   }));
  // };

  useEffect(() => {
    getProductsAPI(idCategory);

    console.log(idCategory);

    // getProducts()
    //   .then((data) => setProducts(data))
    //   .catch((err) => console.log(err));

    // return () => {};
  }, [idCategory]);

  console.log(products);

  return (
    <ProductsCont>
      {products.length > 0 ? (
        products?.map((product, index) => {
          const { name, cost, image, id, stock } = product;

          return (
            <li key={index}>
              <Product
                productName={name}
                productCost={cost}
                productImg={image}
                productId={id}
                productStock={stock}
              />
            </li>
          );
        })
      ) : (
        <li>cargando...</li>
      )}
    </ProductsCont>
  );
};

export default Products;
