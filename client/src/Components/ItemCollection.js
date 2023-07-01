import React from "react";
import { useLocation } from "react-router-dom";

function ItemCollection() {
  const location = useLocation();

  const display = location.state.item;

  console.log(display);

  return (
    <div className="collection">
      <img src={display.image} alt="Image" />
      <div>
        <p>Name: {display.name}</p>
        <p>Quantity: {display.quantity}</p>
        <p>Destroyed items: {display.destroyed_items}</p>
        <p>Buying price: {display.buying_price}</p>
        <p>Selling Price: {display.selling_price}</p>
        <p>Status of item: {display.status_of_item}</p>
      </div>
    </div>
  );
}

export default ItemCollection;
