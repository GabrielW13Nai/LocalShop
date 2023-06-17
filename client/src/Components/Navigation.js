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
                <Link to="/statistics"><button className="btn-dashboard">STATISTICS &nbsp; &nbsp; &nbsp; &nbsp;<BarChartOutlinedIcon /></button></Link><br></br>
                <Link to="/paymentstatus"><button className="btn-dashboard">PAYMENT STATUS &nbsp; &nbsp; &nbsp; &nbsp;<PaymentOutlinedIcon /></button></Link><br></br>
                <Link to="/productinfo"><button className="btn-dashboard" >PRODUCT INFORMATION &nbsp; &nbsp; &nbsp; &nbsp;<Inventory2OutlinedIcon /> </button></Link><br></br>
                <Link to="/clerkinfo"><button className="btn-dashboard">CLERK INFORMATION  &nbsp; &nbsp; &nbsp; &nbsp;<Person3OutlinedIcon /></button></Link><br></br>
                <Link to="/queryitems"><button className="btn-dashboard">VIEW INDIVIDUAL ITEM HERE &rarr;</button></Link><br></br>
            </div>
        </div>

        </>
    )

}

export default Navigation


