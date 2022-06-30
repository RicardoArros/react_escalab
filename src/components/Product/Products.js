import React, { useEffect, useState } from "react";

import Product from "./Product";
import { ProductsCont } from "./ProductStyled";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://pg-delsur.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  };

  useEffect(() => {
    getProducts();

    // return () => {};
  }, []);

  console.log(products);

  return (
    <ProductsCont>
      {products.length > 0 ? (
        products?.map((product, index) => {
          const { name, cost, image } = product;

          return (
            <li key={index}>
              <Product
                productName={name}
                productCost={cost}
                productImg={image}
              />
            </li>
          );
        })
      ) : (
        <li>Error</li>
      )}
    </ProductsCont>
  );
};

export default Home;
