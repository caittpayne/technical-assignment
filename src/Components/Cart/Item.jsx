import React from "react";

const CartItem = props => {
  return (
    <section className="cart-item">
      <section>
        <img
          className="cart-image"
          src={props.item.data.image.src}
          aria-label={props.item.data.title}
        />
      </section>
      <section>
        <p>{props.item.data.title}</p>
        <p>{props.item.data.variants[0].price}</p>
        <p>{props.item.quantity}</p>
        <section id="quantity">
          <p>change qty</p>
          <button
            className="qty-button"
            onClick={() => props.increment(props.index, props.item.quantity)}
          >
            +
          </button>
          <button
            className="qty-button"
            onClick={() => props.decrement(props.index, props.item.quantity)}
          >
            -
          </button>
        </section>
      </section>
    </section>
  );
};
export default CartItem;
