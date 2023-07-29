import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Navigation from './Navigation';
import Header from "./Header";

// import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'


const Paid = () => {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState(false)
  const [row, setRow] = useState(null)
  const[classNames, setClassNames] = useState("enabled-class")

  // const [button, setButton] = useState(false)



useEffect(()=>{
    fetch('/api/items')
    .then(res=> res.json())
    .then(item=> setItems(item))
},[])




const handleStatus = (idx,e) => {
  setClassNames("disabled-class")
  setRow(idx)
  setStatus(!status)
}

const handleReverse = (idx, good) => {
  setStatus(!status)
  setRow(idx)
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
     <Header />
      <Navigation />
        <div className='tableitems'>
        <thead >
            <tr className='label-table'>
            <th>Item Id</th>
            <th>Item Name</th>
                <th className='clerk-img-tbl'>Quantity of Items</th>
                <th>Items destroyed</th>
                <th>Status of Item</th>
                <th>Buying Price (in Ksh.)</th>
                <th>Selling Price (in Ksh.)</th>
                {/* <th className='clerk-img-tbl'>Image</th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, id)=>{
                            return(
                        <tr key={id}>
                                <>
                                <td> {item.id}</td>
                                <td> {item.name}</td>
                                <td >{item.quantity}</td>
                                <td> {item.destroyed_items}</td>
                                <td>
                                  {item.status_of_item}
                                </td>
                                <td> {item.buying_price}</td>
                                <td> {item.selling_price}</td>
                                {/* <td className='clerk-img-tbl'> {user.user_image}</td> */}
                                <td>
                            <span className='actions'>
                            <Button variant="contained" disabled={item.status_of_item==="Paid"? status: !status} className={classNames} onClick={()=> handleStatus(item.id[row-1])}>Confirm</Button>
                            <Button variant="contained" disabled={item.status_of_item==="Unpaid"? status: !status} className={classNames} onClick={()=> handleReverse(item.id[row-1])} >Reverse</Button>
                            </span>
                        </td>
                                </>


            </tr>)})}


        </tbody>



    </div>
    <br></br> <br></br>
    <div className="clerk-2-btn">
            <Link to="/paymentstatus"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
     </div>


    </>
  )
}

export default Paid;
