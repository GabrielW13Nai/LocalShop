import{ React, useState } from "react";
import { Link } from "react-router-dom";


function ClerkEdit(){
    // const[name, setName]= useState(" ")
    // const[admin_id, setAdminId]= useState(" ")

    const[value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const onKeyDown = (e) => {
        if(e.key === "Enter" || e.key === "Escape"){
            e.target.blur();
        }
    }

    const onBlur = (e) => {
        setValue(e.target.value)
    }





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

            <textarea
            rows={5}
            columns={6}
            type="text"
            className="input"
            aria-label="Field name"
            onChange={handleChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            value={value}
            />
        </>
    )

}
export default ClerkEdit;
