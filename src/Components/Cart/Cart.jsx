import React from "react";
import CartItem from "./Item.jsx";

const Cart = props => {
  return (
    <ul>
      {props.cart.map((item, index) => (
        <li key={item.data.id}>
          <CartItem
            increment={(index, quantity) => props.increment(index, quantity)}
            decrement={(index, quantity) => props.decrement(index, quantity)}
            item={item}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};
export default Cart;
