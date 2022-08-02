import React, { useContext, useEffect } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const contextGlobal = useContext(CartContext);

  useEffect(() => {
    contextGlobal.addToCart({ id: 1, name: "Agua" });

    return () => {};
  }, []);

  return (
    <div>
      Cart
      {contextGlobal.cartList.map((item, index) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
