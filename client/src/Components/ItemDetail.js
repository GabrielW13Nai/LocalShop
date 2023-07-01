import React from 'react';
import {useHistory} from 'react-router-dom';

function ItemDetail({ item}) {

  const history = useHistory()
  function handleClick() {
    history.push({
      pathname: "/itemcollection",
      state: {item: item}
    })
    
  }

  return (
    <div className='card' onClick={handleClick}>
       <p>{item.name}</p> 
       <img className="image"src={item.image} alt="no image found"/>
        
    </div>
  )
}

export default ItemDetail