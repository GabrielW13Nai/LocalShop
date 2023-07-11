import { React, useState } from 'react'

// import { IoSaveSharp} from 'react-icons/io5'

export const ModalReport = ( {item, closeModal}) => {
    const[value, setValue] = useState(item || {
        name: "",
        quantity:"",
        destroyed_items: "",
        buying_price: "",
        selling_price: "",
        user:
            {name:""
    }})

    // const handleChange = e => {
    //         e.preventDefault();
    //         setValue({...value, [e.target.name]: e.target.value});
    //     }

  return (
    <>
    <div className='modal-container-2' onClick={(e)=>{
        if (e.target.className === "modal-container-2") closeModal()
        setValue(value)
        console.log(item)
        }}>

        <div className='modal'>
            <form >
                <div className='form-edit-2'>
                    <h1>Item information:</h1>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Item ID'>Item ID</label>
                    <div> {value.id} </div>
                </div>
            <   div className='form-edit-2'>
                    <label htmlFor='Item Name'>Item Name</label>
                    <div> {value.name} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Quantity'>Quantity</label>
                    <div> {value.quantity} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Destroyed Items'>Destroyed Items</label>
                    <div> {value.destroyed_items} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Status'>Status</label>
                    <div> {value.status_of_item} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Buying Price'>Buying Price (in Kshs.)</label>
                    <div> {value.buying_price} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Selling Price'>Selling Price (in Kshs.)</label>
                    <div> {value.selling_price} </div>
                </div>
                <div className='form-edit-2'>
                    <label htmlFor='Clerk In Charge'>Clerk In Charge</label>
                    <div> {value.user.name} </div>
                </div>
                {/* <div className='form-edit'>
                    <label htmlFor='Upload image'>Update image here</label>
                    <input placeholder='image' type='file' accept='image/*' onChange={handleChange} />
                </div> */}

                {/* <button type='submit' className='btn' onClick={handleSubmit}>Submit</button> */}

            </form>
        </div>
    </div>
    </>

  )
}

export default ModalReport;
