import React from "react";
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Header from "./Header";

function Statistics(){
    return(
        <>
            <Header />
            <Navigation />
            <div className="clerk-div-4">
                <div className="button-clerk">
                <Link to="/chart">
                    <img rounded src="https://marvel-b1-cdn.bc0a.com/f00000000094873/www.purolator.com/sites/default/files/styles/cta/public/images/2019-10/1-boxes-courier.jpg?itok=0HWmCTSJ"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk-add"> ITEM STOCK VS LOSS COMPARISON</label>
                </div>
            </div>
            <div className="clerk-div-4">
                <div className="button-clerk">
                <Link to="/chartprice">
                    <img rounded src="https://www.accru.com/wp-content/uploads/2021/04/How-to-communicate-a-price-increase.jpg"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk-add"> PRICE COMPARISON</label>
                </div>
            </div>
        </>
    )

}
export default Statistics;
