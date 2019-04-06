import React from "react";

const CartItem = props => {
  return (
    <React.Fragment>
      <img className="product_image" src={props.data.image.src} />
      <p>{props.data.title}</p>
      <p>{props.data.variants[0].price}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
};
export default CartItem;
