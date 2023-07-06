import React, { useState } from 'react'
// import { IoSaveSharp} from 'react-icons/io5'

export const Modal = ( {closeModal, defaultValue, onSubmit}) => {

    const [formObj, setFormObj] = useState(
       defaultValue || {
        name: "",
        email: "",
        phone_number: "",
        user_image: ""
    })

    console.log(defaultValue)

    // const validateForm = e => {

    // }

    const handleChange = e => {
        e.preventDefault();
        setFormObj({...formObj, [e.target.name]: e.target.value});
    }

    const handleSubmit=(id) => {

        fetch(`/users/${id}`,{
            method: "PATCH",
            headers:{
               "Content-type":"application/json"
            },
            body: JSON.stringify(formObj)
            })
            .then(res => res.json())
            .then(obj=>{console.log(obj)})
            onSubmit(formObj);
    }

  return (
    <div className='modal-container' onClick={(e)=>{
        if (e.target.className === "modal-container") closeModal()}}>
        <div className='modal'>
            <form onSubmit={handleSubmit}>
            <div className='form-edit'>
                    <label htmlFor='Clerk Id'>Clerk Id</label>
                    <input placeholder='Id'  onChange={handleChange} defaultValue={defaultValue.id} readOnly/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Clerk Name'>Clerk Name</label>
                    <input placeholder='Name' onChange={handleChange} defaultValue={defaultValue.name}/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Email'>Clerk Email</label>
                    <input placeholder='Email Address' onChange={handleChange} defaultValue={defaultValue.email}/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Phone Number'>Phone Number</label>
                    <input placeholder='Phone'  onChange={handleChange} defaultValue={defaultValue.phone_number} />
                </div>
                {/* <div className='form-edit'>
                    <label htmlFor='Upload image'>Update image here</label>
                    <input placeholder='image' type='file' accept='image/*' onChange={handleChange} />
                </div> */}

                <button type='submit' className='btn'>Submit</button>

            </form>
        </div>
    </div>
  )
}
