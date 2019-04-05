import React from "react";

const Item = props => {
  return (
    <React.Fragment>
      <img className="product_image" src={props.image.src} />
      <p>{props.title}</p>
      <p>{props.variants[0].price}</p>
    </React.Fragment>
  );
};
export default Item;
