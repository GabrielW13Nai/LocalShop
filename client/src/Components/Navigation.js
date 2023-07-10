import React from "react";
import { Link } from "react-router-dom";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

function Navigation(){
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
                <Link to="/statistics"><button className="btn-dashboard"><BarChartOutlinedIcon /> &nbsp; &nbsp; &nbsp; &nbsp; STATISTICS</button></Link><br></br>
                <Link to="/paymentstatus"><button className="btn-dashboard"><PaymentOutlinedIcon /> &nbsp; &nbsp; &nbsp; &nbsp;PAYMENT STATUS </button></Link><br></br>
                <Link to="/clerkinfo"><button className="btn-dashboard">  <Person3OutlinedIcon />&nbsp; &nbsp; &nbsp; &nbsp; CLERK INFORMATION</button></Link><br></br>
                <Link to="/queryitems"><button className="btn-dashboard">VIEW INDIVIDUAL ITEM HERE &rarr;</button></Link><br></br>
            </div>
        </div>

        </>
    )

}

export default Navigation


