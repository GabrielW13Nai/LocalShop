import React from "react";
import { Link } from "react-router-dom";
// import AddIcon from '@mui/icons-material/Add';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function ClerkInfo(){
    return(
        <>
            <div className="clerk-div-3">
                <div className="button-clerk">
                <Link to="/clerkadd">
                    <img rounded src="https://static.thenounproject.com/png/438804-200.png"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br> 
                <label className="text-clerk-add"> ADD PROFILE</label>
                </div>
                <div className="button-clerk" >
                    <Link to="/clerkdisplay">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                    alt="Not found"
                    className="img-clerk-display"
                    width="400"
                    height="400"
                    /></Link><br></br> 
                    <label className="text-clerk-display">VIEW CLERK DETAILS</label>
                </div>
                <div className="button-clerk">
                    <Link to="/clerkedit">
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <img src="https://cdn.icon-icons.com/icons2/2621/PNG/512/gui_edit_icon_157165.png"
                    alt="Not found"
                    className="img-clerk-display"
                    width="400"
                    height="400"
                    /></Link><br></br> 
                    <label className="text-clerk-edit">EDIT CLERK</label>
                </div>
            </div>

        </>
    )

}
export default ClerkInfo;
