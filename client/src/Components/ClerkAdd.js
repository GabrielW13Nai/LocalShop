import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ClerkAdd(){
    const[name, setName]= useState(" ")
    const options = {
        value: 1,
      }
    const[admin_id, setAdminId]= useState(options.value)
    const[admins, setAdmin]= useState([])



    const clerk = {
        name,
        admin_id
    }

    useEffect(()=> {
        fetch('/admins')
        .then(res=> res.json())
        .then((clerk=> setAdmin(clerk)))
    }, [])



    function handleAdd(){
        const choice = window.confirm("Are you sure you want to add this clerk to the system?")
        if(choice){
        // e.preventDefault();
        fetch('/clerks',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(clerk)})
        .then(res=> res.json())
        .then(clerk=> console.log(clerk))
        alert('Clerk has been added successfully')
    }}

    return (
        <>

        <div className="clerk-information">
            <div className="clerk-add">
               <form onSubmit={handleAdd} className="add-clerk">
                    <h1 className="clerk-information-title" >Clerk Information</h1>
                    <label htmlFor="Add Clerk" className="textbox-clerk">Clerk Name</label> &nbsp;&nbsp;
                    <input
                    type="text"
                    onChange={e=> setName(e.target.value)}
                    className="textbox-clerk"
                    value={clerk.name}
                    ></input> <br></br>
                     <label htmlFor="Add Clerk" className="textbox-clerk">Admin Name</label>&nbsp;

                        <select className="textbox-clerk" value={clerk.admin_id} onChange={e=> setAdminId(e.target.value)}>
                        {admins.map(admin=>{
                            return(
                            <>
                                <option key={admin.id} defaultValue={admin.id} selected>{admin.name}</option>
                            </>
                            )
                            })}
                        </select> <br></br>
                    <div className="buttons">
                        <button className="btn-clerk" type="submit">Add clerk</button>
                    </div>

               </form>
            </div>
            <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
            </div>
            <div className="clerk-div-3">

            </div>
        </div>

        </>
    )

}
export default ClerkAdd;
