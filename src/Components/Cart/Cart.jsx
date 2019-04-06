import React from "react";
import CartItem from "./Item.jsx";

const Cart = props => {
  return (
    <ul>
      {props.cart.map((item, index) => (
        <li key={item.data.id}>
          <CartItem {...item} />
          <button onClick={() => props.increment(index, item.quantity)}>Increment</button>
          <button onClick={() => props.decrement(index, item.quantity)}>Decrement</button>
        </li>
      ))}
    </ul>
  );
};
export default Cart;
