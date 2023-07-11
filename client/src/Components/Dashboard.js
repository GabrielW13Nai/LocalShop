import React from "react";
import { Link } from "react-router-dom";
// import Navigation from './Navigation';
import Header from "./Header";

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


function Dashboard(){
    return(

        <>
        <Header />
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
                <Link to="/clerkproductinfo"><button className="btn-dashboard" ><Inventory2OutlinedIcon />  &nbsp; &nbsp; &nbsp; &nbsp; PRODUCT INFORMATION</button></Link><br></br>

            </div>
        </div>

        </>
    )

}

export default Dashboard;


