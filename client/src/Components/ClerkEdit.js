import{ React } from "react";
// import{ useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";


function ClerkEdit(){

    return (
        <>
         <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>

        <Table />

        </>

    )

}

export default ClerkEdit;



