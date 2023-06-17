import React from "react";
import { Link } from "react-router-dom";


function Navigation(){
    return(

        <>

        <div className="dashboard">
            <div className="route">
                {/* <div className="dashboard-title">
                    <h2>
                    DASHBOARD
                    </h2>
                </div> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/statistics"><button className="btn-dashboard">STATISTICS</button></Link><br></br>
                <Link to="/paymentstatus"><button className="btn-dashboard">PAYMENT STATUS</button></Link><br></br>
                <Link to="/productinfo"><button className="btn-dashboard">PRODUCT INFORMATION</button></Link><br></br>
                <Link to="/clerkinfo"><button className="btn-dashboard">CLERK INFORMATION</button></Link><br></br>
                <Link to="/queryitems"><button className="btn-dashboard">VIEW INDIVIDUAL ITEM HERE &rarr;</button></Link><br></br>
            </div>
        </div>

        </>
    )

}

export default Navigation


