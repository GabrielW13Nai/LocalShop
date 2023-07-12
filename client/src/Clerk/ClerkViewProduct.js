import React, { useEffect, useState } from "react";
import ItemDetail from "../Components/ItemDetail";
import { Link } from "react-router-dom";
// import Navigation from './Navigation';
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";


function ClerkViewProduct() {
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
    <Header />
    <Dashboard />
    <div className="cards">{items}</div>;
      <div className="clerk-2-btn">
        <Link to="/clerkproductinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
      </div>
  </>
  )

}



export default ClerkViewProduct;
