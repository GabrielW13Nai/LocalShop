import { React } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const Table = ( {deleteRow, editRow, users} ) => {
//     const [users, setUsers] = useState([])



// useEffect(()=>{
//     fetch('/users')
//     .then(res=> res.json())
//     .then(user=> setUsers(user))
// },[])
  return (
    <>

        <div className='tableclerks'>
        <thead >
            <tr className='label-table'>
            <th>Clerk Id</th>
                <th>Clerk Name</th>
                <th className='clerk-img-tbl'>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                {/* <th className='clerk-img-tbl'>Image</th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                        if(user.role !== 'clerk') return null;
                            return(
                        <tr key={user.id}>
                                <>
                                <td> {user.id}</td>
                                <td> {user.name}</td>
                                <td className='clerk-img-tbl'> {user.email}</td>
                                <td> {user.phone_number}</td>
                                <td> {user.role}</td>
                                {/* <td className='clerk-img-tbl'> {user.user_image}</td> */}
                                <td>
                            <span className='actions'>
                                <BsFillTrashFill className='trash' onClick={()=>deleteRow(user.id)}/>
                                <BsFillPencilFill onClick={()=> editRow(user.id)}/>
                            </span>
                        </td>
                                </>

            </tr>
            )})}


        </tbody>

    </div>


    </>
  )
}
