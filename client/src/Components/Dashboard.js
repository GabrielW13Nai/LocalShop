import React from "react";
import { Link } from "react-router-dom";

import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


function Dashboard(){
    return(

        <>

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
                <Link to="/productinfo"><button className="btn-dashboard" ><Inventory2OutlinedIcon />  &nbsp; &nbsp; &nbsp; &nbsp; PRODUCT INFORMATION</button></Link><br></br>

            </div>
        </div>

        </>
    )

}

export default Dashboard;


