import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { ModalReport } from './ModalReport'
import Navigation from './Navigation';
import Header from "./Header";
// import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'


const Report = () => {

//   const [status, setStatus] = useState(false)
  const [modal, setModal] = useState(false)
  const [items, setItems] = useState([])
//   const [itemSingle, setItemSingle] = useState([])
  const [row, setRow] = useState(null)




useEffect(()=>{
    fetch(`/items/`)
    .then(res=> res.json())
    .then(item=> {setItems(item);

    })
},[])




const handleStatus = (idx) => {
    setRow(idx);

    setModal(true)


}

  return (
    <>
      <Header />
      <Navigation />
        <div className='tablequery'>
        <thead >
            <tr className='label-table'>
                <th>Item Id</th>
                <th className='clerk-img-tbl'>Item Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, idx)=>{
                            return(
                                <tr key={idx}>
                                <>
                                <td> {item.id}</td>
                                <td> {item.name}</td>
                                {/* <td className='clerk-img-tbl'> {user.user_image}</td> */}
                                <td>
                                    <span className='actions'>
                                        <Button variant="contained" onClick={()=>handleStatus(item.id)}>VIEW DETAILS</Button>
                                    </span>
                                </td>
                                {modal && <ModalReport

                                closeModal={()=> setModal(false)}
                                item={ row!== null && items[row-1]}
                                />}
                                </>


            </tr>)})}


        </tbody>



    </div>
    <br></br> <br></br>
    <div className="clerk-2-btn">
            <Link to="/queryitems"><button className="clerk-btn-back"> &larr; BACK </button></Link><br></br>
      </div>


    </>
  )
}

export default Report;
