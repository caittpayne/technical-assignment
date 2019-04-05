import React from "react";
import Item from "./Item.jsx";

const Product_list = props => {
  return (
    <ul>
      {props.products.map((item) => (
        <li key={item.id}>
          <Item {...item} />
          <button onClick={() => props.addToCart(item)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};
export default Product_list;
