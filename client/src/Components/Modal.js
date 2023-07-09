import React, { useState} from 'react'

// import { IoSaveSharp} from 'react-icons/io5'

export const Modal = ( {closeModal, defaultValue, onSubmit}) => {



    const[obj, setObj] = useState(defaultValue || {
        id: "",
        name: "",
        email: "",
        phone_number: ""
    })

    // const id = user.id
    // const[name, setName]= useState(user.name)
    // const[email, setEmail]= useState(user.email)
    // const[phone_number, setPhone]= useState(user.phone_number)

    // const obj = {
    //     name,
    //     email,
    //     phone_number,
    // }

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
        setObj({...obj, [e.target.name]: e.target.value});
        console.log(obj);
    }

    const handleSubmit=(id) => {

        fetch(`/users/${id}`,{
            method: "PATCH",
            headers:{
               "Content-type":"application/json"
            },
            body: JSON.stringify(obj)
            })
            .then(res => res.json())
            .then(
            console.log(obj));
            // setId(defaultValue.id)
            onSubmit(obj);
    }

  return (
    <div className='modal-container' onClick={(e)=>{
        if (e.target.className === "modal-container") closeModal()
        // setObj(obj)
        }}>

        <div className='modal'>
            <form >
            <div className='form-edit'>
                    <label htmlFor='Clerk Id'>Clerk Id</label>
                    <input placeholder='Id' name='name' value={obj.id} readOnly/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Clerk Name'>Clerk Name</label>
                    <input placeholder='Name' value={obj.name} onChange={handleChange}/>
                </div>
                <div className='form-edit'>
                    <label htmlFor='Email'>Clerk Email</label>
                    <input placeholder='Email Address' value={obj.email} onChange={handleChange} />
                </div>
                <div className='form-edit'>
                    <label htmlFor='Phone Number'>Phone Number</label>
                    <input placeholder='Phone' value={obj.phone_number} onChange={handleChange}/>
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
