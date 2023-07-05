import React, { useEffect, useState } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'



export const Table = ( {setModal, DeleteRow, editRow} ) => {
    const [users, setUsers] = useState([])



useEffect(()=>{
    fetch('/users')
    .then(res=> res.json())
    .then(user=> setUsers(user))
},[])
  return (
    <>
        <div className='tableclerks'>
        <thead >
            <tr className='label-table'>
                <th>Clerk Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th className='clerk-img-tbl'>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user=>{
                        if(user.role.name !== 'Clerk') return null;
                            return(
                        <tr>
                                <>
                                <td> {user.name}</td>
                                <td> {user.email}</td>
                                <td> {user.phone_number}</td>
                                <td> {user.role.name}</td>
                                <td className='clerk-img-tbl'> {user.user_image}</td>
                                <td>
                            <span className='actions'>
                                <BsFillTrashFill className='trash' onClick={()=>DeleteRow(user.id)}/>
                                <BsFillPencilFill onClick={()=> editRow(user.id)}/>
                            </span>
                        </td>
                                </>

            </tr>)})}


        </tbody>

    </div>


    </>
  )
}
