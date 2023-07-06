import{ React } from "react";
import{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import { Modal } from './Modal'



function ClerkEdit(){

    const[modal, setModal] = useState(false)
    const[clerk, setClerk]= useState([])
    const[rowEdit, setRowEdit]= useState(null)


    useEffect(()=> {
        fetch('/users')
        .then(res=> res.json())
        .then((user)=> {
            setClerk(user);
            })
    }
    , [])

    function handleEdit(id){
        setRowEdit(id);

        setModal(true);
    }


    const handleSubmit = (newRow) => {
        // e.preventDefault();
        // rowEdit ===null?
        // setRowEdit([...clerk, newRow]):
        setRowEdit(clerk.map((currRow,id)=>{
            if (id !== rowEdit) return currRow;
                return newRow;
    }))
    }


    function handleDelete(id){

        const choice = window.confirm("Are you sure you want to remove this clerk from the system?")
        if (choice){
            fetch(`/users/${id}`,{method: "DELETE",})
            .then(res=> res.json())
            .then(()=> {
                const newClerk = clerk.filter(clerk => clerk.id !== id)
                setClerk(newClerk);
                })
                window.location.reload(true)
            }

    }

    return (
        <>
         <div className="clerk-2">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>

        <Table deleteRow={handleDelete} editRow={handleEdit}/>
        {modal &&
        (<Modal
            onSubmit={handleSubmit}
            closeModal={()=>setModal(false)}
            defaultValue={rowEdit !== null && clerk[rowEdit-1]}
            />)}
        {/* <button className="btn-primary" onClick={()=> setModal(true)}>Open</button> */}

        </>

    )

}

export default ClerkEdit;



