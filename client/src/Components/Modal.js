import React from 'react'
// import { IoSaveSharp} from 'react-icons/io5'

export const Modal = ( {closeModal, defaultValue}) => {
  return (
    <div className='modal-container' onClick={(e)=>{
        if (e.target.className === "modal-container") closeModal()}}>
        <div className='modal'>
            <form>
                <div className='form-edit'>
                    <label htmlFor='Clerk Name'>Clerk Name</label>
                    <input placeholder='Name' />
                </div>
                <div className='form-edit'>
                    <label htmlFor='Email'>Clerk Email</label>
                    <input placeholder='Email Address' />
                </div>
                <div className='form-edit'>
                    <label htmlFor='Phone Number'>Phone Number</label>
                    <input placeholder='Phone' />
                </div>
                <button type='submit' className='btn'>Submit</button>

            </form>
        </div>
    </div>
  )
}
