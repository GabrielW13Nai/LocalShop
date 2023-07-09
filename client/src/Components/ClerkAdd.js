import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ClerkAdd(){
    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const[phone_number, setPhone]= useState("")
    const[user_image, setImage]= useState("")
    const[users, setUser]= useState([])
    const[error, setError]= useState("")



    useEffect(()=> {
        fetch('/users')
        .then(res=> res.json())
        .then((user)=> {setUser(user);
            })
    }
    , [])

    const[role_id, setId]= useState()



    useEffect(()=> {
        users.map(user =>{
             const name = user.role.name;
             if (name!== "Clerk")return null;
                return (
                    setId(user.role_id)
                    )
        }
                )

    }, [users])
    console.log(role_id)





    // const options = {
    //     value: 1,
    //   }
    // const[admin_id, setAdminId]= useState(options.value)




    const clerk = {
        name,
        email,
        password,
        phone_number,
        user_image,
        role_id
    }

    const validation =() => {
        if (clerk.name && clerk.email && clerk.password && clerk.phone_number && clerk.user_image && clerk.role_id ) {
            setError("")
            return true;
        } else {
            let errorArr = [];
            for(let [key,value] of Object.entries(clerk)){
                if(!value){
                    errorArr.push(key)
                }
            }
            setError(errorArr.join(', '))
            return false;
        }}

    function handleAdd(e){

        e.preventDefault();

        if(!validation())return;


        const choice = window.confirm("Are you sure you want to add this clerk to the system?")
        if(choice){

        fetch('/users',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(clerk)})
        .then(res=> res.json())
        .then(clerk=>{
        console.log(clerk);
        }
        )
        alert('Clerk has been added successfully')
        window.location.reload();
    }}




    return (
        <>

        <div className="clerk-information">
            <div className="clerk-add">
               <form onSubmit={handleAdd} className="add-clerk" >
                    <h1 className="clerk-information-title" >Clerk Information</h1>
                    <label htmlFor="Add Clerk" className="textbox-clerk">Clerk Name</label>
                    <input
                        type="text"
                        onChange={e=> setName(e.target.value)}
                        className="textbox-clerk"
                        value={clerk.name}
                    /> <br></br>
                     <label htmlFor="Add Clerk" className="textbox-clerk">Email</label>
                    <input
                        type="text"
                        onChange={e=> setEmail(e.target.value)}
                        className="textbox-clerk"
                        value={clerk.email}
                    /> <br></br>
                    <label htmlFor="Add Clerk" className="textbox-clerk">Password</label><br></br>
                    <input
                        type="password"
                        placeholder=" Enter your password"
                        onChange={e=> setPassword(e.target.value)}
                        className="textbox-clerk"
                        value={clerk.password}
                    /> <br></br>
                    <label htmlFor="Add Clerk" className="textbox-clerk">Phone Number</label>
                    <input
                        type="text"
                        onChange={e=> setPhone(e.target.value)}
                        className="textbox-clerk"
                        value={clerk.phone_number}
                    /> <br></br>
                    <label htmlFor="Add Clerk" className="textbox-clerk">Insert Image here</label>
                    <input
                        type="text"
                        onChange={e=> setImage(e.target.value)}
                        className="textbox-clerk"
                        value={clerk.user_image}
                    /> <br></br>
                    <input
                        type="hidden"
                        className="textbox-clerk"
                        value={"clerk"}
                    />

                    {error && <div className="error">{`Please ensure the following input fields are filled: ${error}`}</div>}<br></br>



                    <div className="buttons">
                        <button className="btn-clerk" type="submit">Add clerk</button>
                    </div>



               </form>
            </div>

        </div>

        <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
            </div>

        </>
    )

}
export default ClerkAdd;
