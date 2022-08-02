import React, { useContext, useEffect } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cartContextFunct = useContext(CartContext);

  console.log(cartContextFunct);

  useEffect(() => {
    cartContextFunct.addToCart({ id: 1, name: "Agua" });

    return () => {};
  }, []);

  return (
    <div>
      Cart
      {cartContextFunct.cartList.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;
