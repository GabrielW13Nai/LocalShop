import React from "react";
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Header from "./Header";

function QueryItems(){
    return(
        <>
        <Header />
        <Navigation />
            <div className="clerk-div-3">
                <div className="button-clerk">
                <Link to="/report">
                    <img rounded src="https://png.pngitem.com/pimgs/s/482-4820481_thumb-image-survey-svg-hd-png-download.png"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk-add"> VIEW ITEM HERE &rarr;</label>
                </div>
            </div>
        </>
    )

}
export default QueryItems;
