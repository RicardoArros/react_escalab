import React, { useEffect, useState } from "react";

import Product from "./Product";
import { ProductsCont } from "./ProductStyled";

import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]); 

  const { idCategory } = useParams();

  const getProducts = async (idCategoria = null) => {

    console.log(idCategoria);

    const url = idCategoria =! null ? `https://pg-delsur.herokuapp.com/products?categoryId=${idCategoria}` : 'https://pg-delsur.herokuapp.com/products';

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  };

  useEffect(() => {
    getProducts(idCategory);

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
        <li>Error</li>
      )}
    </ProductsCont>
  );
};

export default Products;
