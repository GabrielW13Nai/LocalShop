import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";


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
  return (
    <>
  <div className="cards">{items}</div>;
    <div className="clerk-2">
      <Link to="/productinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
    </div>
  </>
  )

}



export default ViewProduct;
