import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

import Product from "./Product";
import { ProductsCont } from "./ProductStyled";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  // const getProducts = async (idCategoria = null) => {
  //   console.log(idCategoria);

  //   const url = idCategoria !== null
  //     ? `https://pg-delsur.herokuapp.com/products?categoryId=${idCategoria}`
  //     : "https://pg-delsur.herokuapp.com/products";

  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.products))
  //     .catch((error) =>
  //       console.log("Hubo un problema con la petición Fetch:" + error.message)
  //     );
  // };

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  useEffect(() => {
    // getProducts(idCategory);
    getProducts();

    // return () => {};
  }, [idCategory]);

  console.log(products);

  return (
    <ProductsCont>
      {products.length > 0 ? (
        products?.map((product, index) => {
          const { name, cost, image, id } = product;

          return (
            <li key={index}>
              <Product
                productName={name}
                productCost={cost}
                productImg={image}
                productId={id}
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
