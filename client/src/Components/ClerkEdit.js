import{ React } from "react";
import{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import { Modal } from './Modal'
// import { UserContext } from './UserContext'
import Navigation from './Navigation';
import Header from "./Header";



function ClerkEdit(){

    const[modal, setModal] = useState(false)
    const[clerk, setClerk]= useState([])
    const[rowEdit, setRowEdit]= useState(-1)



    // const {users} = useContext(UserContext)



    useEffect(()=> {
        fetch('/api/users')
        .then(res=> res.json())
        .then((user)=> {
            setClerk(user);
            })
    }
    , [])

    // useEffect(()=> {
    //     clerk.map(user => setId(user.id))
    // }, [clerk])





    // const user_id = clerk.map(user=> user)

    function handleEdit(id){
        setRowEdit(id);
        setModal(true)

    }


    const handleSubmit = (id, updated) => {
        // e.preventDefault();
        // rowEdit ===null?
        // setRowEdit([...clerk, newRow]):
        setClerk(clerk.map((user)=>user.id === id? updated: user))
    }


    function handleDelete(id){

        const choice = window.confirm("Are you sure you want to remove this clerk from the system?")
        if (choice){
            fetch(`/api/users/${id}`,{method: "DELETE",})
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
        <Header />
        <Navigation />
         <div className="clerk-2-btn">
            <Link to="/clerkinfo"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
        </div>

        <Table deleteRow={handleDelete} editRow={handleEdit} users={clerk}/>
        { modal && <Modal
            onSubmit={handleSubmit}
            closeModal={()=>setModal(false)}
            defaultValue={rowEdit !== null && clerk[rowEdit-1]}

            /> }

            </>)
        // {<button className="btn-primary" onClick={()=> setModal(true)}>Open</button> }


}

export default ClerkEdit;



