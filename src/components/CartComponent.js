import React, { useContext } from "react";
import TotalContext from "../Store/TotalContext";

const CartComponent = ({ cartItems }) => {
  const total = useContext(TotalContext);
  return (
    <div className="container">
      <h1>Cart</h1>
      <ul className="cartlist">
        {cartItems
          ? cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name}
                {"   "} - {"  "}${cartItem.price}
              </li>
            ))
          : "Empty Cart"}
        Total: ${total}
      </ul>
    </div>
  );
};

export default CartComponent;
