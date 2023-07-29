import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

function ClerkRemove({clerkDelete, setClerkDelete, clerk}){

    function handleDelete(id){
        const choice = window.confirm("Are you sure you want to remove this clerk from the system?")
        if (choice){
            fetch(`/api/users/${id}`,{method: "DELETE",})
            .then(res=> res.json())
            .then(()=> {
                const newClerk = clerkDelete.filter(clerk => clerk.id !== id)
                setClerkDelete(newClerk);
                })
                window.location.reload(true)
            }

    }

        return(
            <>
            <div>
                <IconButton
                className="btn-delete"
                onClick={()=> handleDelete(clerk.id)}
                ><DeleteIcon />
                </IconButton>
            </div>
            </>
        )
}


export default ClerkRemove;
