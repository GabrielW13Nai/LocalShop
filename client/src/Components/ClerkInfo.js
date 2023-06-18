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
                    <img src="https://thumbs.dreamstime.com/b/add-create-account-icon-new-profile-male-user-vector-line-152165243.jpg"
                    className="img-clerk-display"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                <label className="text-clerk">ADD PROFILE</label>
                </div>
                <div className="button-clerk" >
                    <Link to="/clerkdisplay">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNioCsRsh8JVWwMTDK5pLbv6lqBxPKlhnwfdUggE&s"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk">VIEW CLERK DETAILS</label>
                </div>
                <div className="button-clerk">
                    <Link to="/clerkedit">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2P-ZCpfCR8M9g5sR6jmL2mojo9O00Vf-HwtGAdx2SL1vLSL2hAimFl738lOJqGNhC3s4&usqp=CAU"
                    alt="Not found"
                    width="400"
                    height="400"
                    /></Link><br></br>
                    <label className="text-clerk">EDIT CLERK</label>
                </div>
            </div>

        </>
    )

}
export default ClerkInfo;
