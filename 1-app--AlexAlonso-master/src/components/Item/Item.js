
import React from 'react';
import ItemDetailConteiner from '../itemDetailConteiner';

const Item = ({ id, title, description, price , image}) => {
  
  

  return (
     <div className='w-75 h-25 container'>
         <div className=' d-flex card  bg-dark text-light' >
          <h2 className='card-title'>{title}</h2>
          <p className='card-text' >{description}</p>
          <p>{price}</p>
          <img className='card-img-top' src={image} alt={title}></img>
          <a href="#" className='btn btn-primary'>Go somewhere</a>
         </div>
         <ItemDetailConteiner
       />  
         </div>
             
  );
}

export default Item
