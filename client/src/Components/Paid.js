import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
// import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'


const Paid = () => {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState(false)
  // const [button, setButton] = useState(false)
const[classNames, setClassNames] = useState("enabled-class")


useEffect(()=>{
    fetch('/items')
    .then(res=> res.json())
    .then(item=> setItems(item))
},[])




const handleStatus = () => {
  setStatus(!status)
  setClassNames("disabled-class")
}

const handleReverse = () => {
  setStatus(!status)
  setClassNames("enabled-class")
}


// const handleChange=(id) => {

//   fetch(`/items/${id}`,{
//       method: "PATCH",
//       headers:{
//          "Content-type":"application/json"
//       },
//       body: JSON.stringify(itemPaid)
//       })
//       .then(res => res.json())
//       .then(
//       console.log(items));
//       // setId(id);
// }


  return (
    <>
        <div className='tableitems'>
        <thead >
            <tr className='label-table'>
            <th>Item Id</th>
                <th className='clerk-img-tbl'>Quantity of Items</th>
                <th>Items destroyed</th>
                <th>Status of Item</th>
                <th>Buying Price (in Ksh.)</th>
                <th>Selling Price (in Ksh.)</th>
                <th>Clerk In Charge</th>
                {/* <th className='clerk-img-tbl'>Image</th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, id)=>{
                            return(
                        <tr key={id}>
                                <>
                                <td> {item.name}</td>
                                <td >{item.quantity}</td>
                                <td> {item.destroyed_items}</td>
                                <td>
                                  {status && item.status_of_item!=="Paid"? <span class={classNames}>{item.status_of_item}</span>: null}
                                </td>
                                <td> {item.buying_price}</td>
                                <td> {item.selling_price}</td>
                                <td> {item.user.name}</td>
                                {/* <td className='clerk-img-tbl'> {user.user_image}</td> */}
                                <td>
                            <span className='actions'>
                            <Button variant="contained" disabled={status} onClick={handleStatus}>Confirm</Button>
                            <Button variant="contained" disabled={!status} onClick={handleReverse} >Reverse Payment</Button>
                            </span>
                        </td>
                                </>


            </tr>)})}


        </tbody>



    </div>
    <br></br> <br></br>
    <div className="clerk-2">
            <Link to="/paymentstatus"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
      </div>


    </>
  )
}

export default Paid;
