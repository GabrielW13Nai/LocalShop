import React from "react";
// import { useHistory } from "react-router-dom";
// import Navigation from './Navigation';
import Header from "./Header";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";


function ClerkProductInfo(){

    // const history = useHistory();

    // function handleView(){
    //   history.push("/viewproducts")
    // }

    // function handleAdd(){
    //   history.push("/addproducts")
    // }

    return (
      <>
        <Header />
        <Dashboard />
        <Link to="/clerkaddproducts"><div className="product-information">
          <div className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t-km7l-fz4xsYz_o7cK_2hWgJ1puvsI3Pg&usqp=CAU" alt="not found"/>
             <p>ADD PRODUCT</p>
          </div></div></Link> <br></br>
          <Link to="/clerkviewproducts"><div className="product-information-2"><div className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNddxuJAgTkl_DC8LzJSeh44dIlECzQc-EA&usqp=CAU" alt="not found" />
            <p>VIEW PRODUCT</p>
          </div></div>
        </Link><br></br>

      </>)
}
export default ClerkProductInfo;

