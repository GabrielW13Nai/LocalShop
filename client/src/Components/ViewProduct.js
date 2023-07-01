import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ViewProduct() {
  const [data, setData] = useState([]);
  useEffect(function () {
    fetch("/items")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  //console.log(data);

  let items = data.map((item) => {
    return <ItemDetail item={item} key={item.name} />;
  });
  return <div className="cards">{items}</div>;
}

export default ViewProduct;
