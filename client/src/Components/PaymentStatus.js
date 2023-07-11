import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navigation from './Navigation';

function PaymentStatus(){
    return(
        <>
        <Header />
        <Navigation />
            <div className="clerk-div-3">
                <div className="button-clerk">
                <Link to="/paid">
                    <img rounded src="https://cdn-icons-png.flaticon.com/512/9478/9478631.png"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk-add"> CHECK CURRENT STATUS</label>
                </div>
            </div>
        </>
    )

}
export default PaymentStatus;
