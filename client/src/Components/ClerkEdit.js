import React from "react";
import { Link } from "react-router-dom";


function ClerkEdit(){
    // const[name, setName]= useState(" ")
    // const[admin_id, setAdminId]= useState(" ")

    // const clerk = {
    //     name,
    //     admin_id
    // }

    // useEffect(()=> {
    //     fetch('/admins')
    //     .then(res=> res.json())
    //     .then((clerk=> setAdmin(clerk)))
    // }, [])

    // function handleEdit(e){
    //     e.preventDefault();
    //     fetch('/clerks',{
    //         method: "PATCH",
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify(clerk)})
    //     .then(res=> res.json())
    //     .then(clerk=> console.log(clerk))
    // }

    return (
        <>

            <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
            </div>
        </>
    )

}
export default ClerkEdit;
