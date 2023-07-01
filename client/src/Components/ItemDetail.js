import React from 'react'

function ItemDetail({ item}) {
  return (
    <div className='card'>
       <p>{item.name}</p> 
       <img className="image"src={item.image} alt="no image found"/>
        
    </div>
  )
}

export default ItemDetail