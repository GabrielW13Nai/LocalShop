import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Header from "./Header";
// import ClerkRemove from './ClerkRemove';

function ClerkDisplay(){
    const[users, setUser]= useState([])
    // const[clerks, setClerk]= useState([])

    useEffect(()=> {
        fetch('/users')
        .then(res=> res.json())
        .then((user)=> {setUser(user);
            })
    }
    , [])




    // useEffect(()=> {
    //     users.filter(user=>{
    //         if(user.role_id!==id) return null;

    //         return(
    //             setClerk(user));
    //      })}

    // , [users, id])

    return(
        <>
        <Header />
        <Navigation />
        <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>
        {users.map((clerk, id)=>{
            if(clerk.role !== "clerk") return null;
            return(
            <>
            <div className="clerks-flex-display" key={id}>
            <section className="display-clerk">
                <div>
                    <img
                    src = {clerk.user_image}
                    alt = "not found"
                    width='150'
                    height='150'
                    className="img-clerks"
                    />
                </div>
                <div>
                    <label>Clerk Id: </label>
                    <div >{clerk.id}</div> <br></br>
                    <label>Clerk name: </label>
                    <div >{clerk.name}</div> <br></br>
                </div>
                {/* <ClerkRemove clerkDelete={users} setClerkDelete={setUser} clerk={clerk} /> */}
            </section>

            </div>
            </>)
            })}



        </>
    )
}

export default ClerkDisplay
