import{ React } from "react";
import{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import { Modal } from './Modal'



function ClerkEdit(){

    const[modal, setModal] = useState(false)
    const[clerkDelete, setClerkDelete]= useState([])
    const[rowEdit, setRowEdit]= useState(null)


    useEffect(()=> {
        fetch('/users')
        .then(res=> res.json())
        .then((user)=> {
            setClerkDelete(user);
            })
    }
    , [])

    function handleEdit(id){
        fetch('/users',{
            method: "PATCH"})
            .then(res => res.json())
            .then(id=>console.log(id))

        setRowEdit(id);
        setModal(true);
    }


    function handleDelete(id){

        const choice = window.confirm("Are you sure you want to remove this clerk from the system?")
        if (choice){
            fetch(`/users/${id}`,{method: "DELETE",})
            .then(res=> res.json())
            .then(()=> {
                const newClerk = clerkDelete.filter(clerk => clerk.id !== id)
                setClerkDelete(newClerk);
                })
                window.location.reload(true)
            }

    }

    return (
        <>
         <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>

        <Table DeleteRow={handleDelete} editRow={handleEdit}/>
        {modal&& <Modal closeModal={()=>setModal(false)}

        defaultValue={rowEdit !==null}/>}
        <button className="btn-primary" onClick={()=> setModal(true)}>Open</button>

        </>

    )

}

export default ClerkEdit;



