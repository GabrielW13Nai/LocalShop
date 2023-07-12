import React from "react";
// import { Link } from "react-router-dom";
// import Navigation from './Navigation';
// import Header from "./Header";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import { useHistory } from "react-router-dom";


import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


function Dashboard(){
    const history = useHistory();
    function handleView(){
        history.push("/viewproducts")
      }

      function handleAdd(){
        history.push("/addproducts")
      }
    return(

        <>
        {/* <Header /> */}
        {/* <Navigation /> */}
        <div className="dashboard">
            <div className="route" >
                <div className="dashboard-title">
                    <h2>
                    DASHBOARD
                    </h2>
                </div>
                {/* <br></br> */}
                {/* <br></br>
                <br></br>
                <br></br> */}
                <button className="btn-dashboard" ><Inventory2OutlinedIcon />  &nbsp; &nbsp; &nbsp; &nbsp; PRODUCT INFORMATION</button>
            </div>
            <div className="product-information">
          <div onClick={handleAdd} className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t-km7l-fz4xsYz_o7cK_2hWgJ1puvsI3Pg&usqp=CAU" alt="not found"/>
             <p>ADD PRODUCT</p>
          </div>
          <div onClick={handleView} className="icons">
            <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNddxuJAgTkl_DC8LzJSeh44dIlECzQc-EA&usqp=CAU" alt="not found" />
            <p>VIEW PRODUCT</p>
          </div>
        </div>
            <AddProduct />
            <ViewProduct />
        </div>

        </>
    )

}

export default Dashboard;


