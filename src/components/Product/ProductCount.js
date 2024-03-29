import { useEffect, useState } from "react";
import { ProductCountWrap } from "./ProductStyled";

const ProductCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial + 1) {
      setCount(count - 1);
    }
  };
  
  return (
    <>
      <ProductCountWrap>
        <button variant="text" onClick={increment}>
          +
        </button>

        <div>{count}</div>

        <button variant="text" onClick={decrement}>
          -
        </button>
      </ProductCountWrap>

      <div>
        {stock && count ? (
          <button onClick={() => onAdd(count)}>Añadir al carrito</button>
        ) : (
          <button disabled>Añadir al carrito</button>
        )}
      </div>
    </>
  );
};

export default ProductCount;
