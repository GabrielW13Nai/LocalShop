import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClerkRemove from './ClerkRemove';

function ClerkAdd(){
    const[clerks, setClerk]= useState([])
    const[clerkDelete, setClerkDelete]= useState([])


    useEffect(()=> {
        fetch('/clerks')
        .then(res=> res.json())
        .then((clerk=> {
            setClerk(clerk);
            setClerkDelete(clerk);}
        ))
    }, [])



    return(
        <>
        <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>
        {clerks.map(clerk=>{
            return(
            <>
            <div className="clerks-flex-display">
            <section className="display-clerk">
                <div>
                    <img
                    src = "https://img.freepik.com/free-icon/user_318-286823.jpg"
                    alt = "not found"
                    width='100'
                    height='100'
                    />
                </div>
                <div>
                    <label>Clerk id: </label>
                    <div>{clerk.id}</div> <br></br>
                    <label>Clerk name: </label>
                    <div>{clerk.name}</div> <br></br>
                </div>
                <ClerkRemove clerkDelete={clerkDelete} setClerkDelete={setClerkDelete} clerk={clerk} />
            </section>

            </div>
            </>
            )})}



        </>
    )
}

export default ClerkAdd
