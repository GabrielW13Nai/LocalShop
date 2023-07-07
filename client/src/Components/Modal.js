import React, { useState } from 'react'
// import { IoSaveSharp} from 'react-icons/io5'

export const Modal = ( {closeModal, defaultValue, onSubmit}) => {

    const [formObj, setFormObj] = useState(
       defaultValue || {
        id:"",
        name: "",
        email: "",
        phone_number: ""
    })

    // const [id, setId] = useState("")

    // const formId = {
    //     id
    // }


    // user_image: ""

    // console.log(defaultValue)

    // const validateForm = e => {

    // }

    const handleChange = e => {
        e.preventDefault();
        setFormObj({...formObj, [e.target.name]: e.target.value});
        console.log(formObj);
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
            .then(
            console.log(formObj));
            // setId(id)
            onSubmit(formObj);
    }

  return (
    <div className='modal-container' onClick={(e)=>{
        if (e.target.className === "modal-container") closeModal()}}>
        <div className='modal'>
            <form >
            <div className='form-edit'>
                    <label htmlFor='Clerk Id'>Clerk Id</label>
                    <input placeholder='Id' name='name' value={formObj.id} readOnly/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Clerk Name'>Clerk Name</label>
                    <input placeholder='Name' value={formObj.name} onChange={handleChange}  name='name'/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Email'>Clerk Email</label>
                    <input placeholder='Email Address' value={formObj.email} onChange={handleChange} />
                </div>
                <div className='form-edit'>
                    <label htmlFor='Phone Number'>Phone Number</label>
                    <input placeholder='Phone' value={formObj.phone_number} onChange={handleChange}/>
                </div>
                {/* <div className='form-edit'>
                    <label htmlFor='Upload image'>Update image here</label>
                    <input placeholder='image' type='file' accept='image/*' onChange={handleChange} />
                </div> */}

                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    </div>
  )
}
